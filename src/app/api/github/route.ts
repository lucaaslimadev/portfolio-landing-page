import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'lucaaslimadev';

export async function GET() {
  try {
    // Buscar dados do perfil
    const profileRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // Cache por 1 hora
    });

    if (!profileRes.ok) {
      throw new Error('Failed to fetch GitHub profile');
    }

    const profile = await profileRes.json();

    // Buscar repositórios públicos
    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }
    });

    if (!reposRes.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }

    const repos = await reposRes.json();

    // Calcular métricas de qualidade
    const languages: Record<string, number> = {};
    let totalStars = 0;
    let totalForks = 0;
    let reposWithReadme = 0;
    let reposDeployed = 0;
    let reposWithDescription = 0;
    const recentRepos: Array<{ name: string; updated_at: string; language: string | null }> = [];

    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    for (const repo of repos) {
      totalStars += repo.stargazers_count || 0;
      totalForks += repo.forks_count || 0;

      // Verificar qualidade
      // Assumir que repositórios com descrição provavelmente têm README
      // (a API não retorna has_readme diretamente sem fazer request adicional)
      if (repo.description && repo.description.length > 10) reposWithReadme++;
      if (repo.homepage) reposDeployed++;
      if (repo.description) reposWithDescription++;

      // Linguagens
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }

      // Repositórios atualizados recentemente
      const updatedAt = new Date(repo.updated_at);
      if (updatedAt > thirtyDaysAgo) {
        recentRepos.push({
          name: repo.name,
          updated_at: repo.updated_at,
          language: repo.language,
        });
      }
    }

    // Ordenar linguagens por frequência
    const topLanguages = Object.entries(languages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6)
      .map(([name, count]) => ({ name, count }));

    // Calcular tempo desde criação da conta
    const accountCreated = new Date(profile.created_at);
    const monthsActive = Math.floor(
      (now.getTime() - accountCreated.getTime()) / (1000 * 60 * 60 * 24 * 30)
    );

    return NextResponse.json({
      profile: {
        publicRepos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
        createdAt: profile.created_at,
        monthsActive,
      },
      stats: {
        totalStars,
        totalForks,
        totalRepos: repos.length,
        reposWithReadme,
        reposDeployed,
        reposWithDescription,
        recentActivity: recentRepos.length,
      },
      topLanguages,
      recentRepos: recentRepos.slice(0, 5),
    });
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}

