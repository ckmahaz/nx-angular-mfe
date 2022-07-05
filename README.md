# NxAngularMfe

This project was generated using [Nx](https://nx.dev).

Purpose of this project is to demonstrate Module Federation in Nx Workspace (Angular).

# Implementation

After the nx workspace with required apps and libs are created, module federation was added from NX console. 

For an existing monorepo, we can include MF using below commands.

ng generate @nrwl/angular:setup-mfe --appName=shell --mfeType=host --port=5000 --routing

ng generate @nrwl/angular:setup-mfe --appName=admin --mfeType=remote --port=3000 --routing

This typically it does the following changes. 

```
CREATE apps/mfe-dynamic/webpack.config.js
CREATE apps/mfe-dynamic/webpack.prod.config.js
CREATE apps/mfe-dynamic/src/app/remote-entry/entry.component.ts
CREATE apps/mfe-dynamic/src/app/remote-entry/entry.module.ts
UPDATE apps/mfe-dynamic/src/app/app.module.ts
UPDATE workspace.json
CREATE apps/mfe-dynamic/src/bootstrap.ts
UPDATE apps/mfe-dynamic/src/main.ts

```
*Entry component was removed as it was not needed for this case*

Run the applications using below command:

```
- nx serve mfe-dynamic
- nx serve admin
- nx serve dashboard

```

Each application are developed individually and independently deployable. 

Here, dasboard is shell hosting admin as remote. And, admin is also a shell hosting mfe-dasboard as remote.
We are exposing the module from lib via admin and mfe-dashboard. 


## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
For Nx Workspace [Creation](https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/2-creating-an-nx-workspace)
From Angular architects - [Microfront end revolution](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/)
For [MFE Source](https://github.com/angular-architects/module-federation-plugin)


