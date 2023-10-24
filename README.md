## Deploy to GitHub Pages

1. Create a file named `deploy.yml` inside `.github/workflows` directory of your project with some content like this:

   ```yaml
   # Sample workflow for building and deploying a VitePress site to GitHub Pages
   #
   name: Deploy VitePress site to Pages

   on:
     # Runs on pushes targeting the `main` branch. Change this to `master` if you're
     # using the `master` branch as the default branch.
     push:
       branches: [main]

     # Allows you to run this workflow manually from the Actions tab
     workflow_dispatch:

   # Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
   permissions:
     contents: read
     pages: write
     id-token: write

   # Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
   # However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
   concurrency:
     group: pages
     cancel-in-progress: false

   jobs:
     # Build job
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
           with:
             fetch-depth: 0 # Not needed if lastUpdated is not enabled
         # - uses: pnpm/action-setup@v2 # Uncomment this if you're using pnpm
         # - uses: oven-sh/setup-bun@v1 # Uncomment this if you're using Bun
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: npm # or pnpm / yarn
         - name: Setup Pages
           uses: actions/configure-pages@v3
         - name: Install dependencies
           run: npm ci # or pnpm install / yarn install / bun install
         - name: Build with VitePress
           run: |
             npm run docs:build # or pnpm docs:build / yarn docs:build / bun run docs:build
             touch docs/.vitepress/dist/.nojekyll
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: docs/.vitepress/dist

     # Deployment job
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       needs: build
       runs-on: ubuntu-latest
       name: Deploy
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

   ::: warning
   Make sure the `base` option in your VitePress is properly configured. See [Setting a Public Base Path](#setting-a-public-base-path) for more details.
   :::

2. In your repository's settings under "Pages" menu item, select "GitHub Actions" in "Build and deployment > Source".

3. Push your changes to the `main` branch and wait for the GitHub Actions workflow to complete. You should see your site deployed to `https://<username>.github.io/[repository]/` or `https://<custom-domain>/` depending on your settings. Your site will automatically be deployed on every push to the `main` branch.

