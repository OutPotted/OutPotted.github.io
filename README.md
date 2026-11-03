# QvxStudios / Qv4x

Roblox developer portfolio featuring five games, contribution pages, a lunar background, and Discord contact.

Live site: https://outpotted.github.io/

## Development

Use Node.js 24 and pnpm. Run pnpm install, then pnpm dev.

Checks: pnpm lint and pnpm typecheck.

Build: pnpm build. The static website is generated in out/. GitHub Pages serves the gh-pages branch.

## Update content

- data/portfolio.ts: game names, roles, links, artwork paths.
- data/case-studies.ts: contribution descriptions.
- data/engineering-notes.ts: clearly labeled illustrative design studies.
- data/roblox-snapshot.json: dated visit data. Run pnpm refresh:visits to refresh before rebuilding.
- public/games/: official game artwork; public/avatar.png: avatar.

## Publishing

Push source changes to main. Build the site, then publish the generated out/ contents to gh-pages. Keep .nojekyll in the publishing branch. Never commit credentials.

## Custom domain later

After registering a domain, configure GitHub Pages custom-domain settings and the DNS records documented by GitHub. Set NEXT_PUBLIC_SITE_URL to the verified domain and rebuild. Do not add a CNAME file until you control the domain.

All game artwork belongs to its respective creators.
