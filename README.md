<h1 align="center">Feng GAO</h1>

<p align="center"><strong>Professor of Medical AI @ SYSU</strong></p>
<p align="center">
  <a href="https://tokscale.ai/u/gaofeng21cn">
    <img src="https://tokscale.ai/api/embed/gaofeng21cn/svg?theme=light&compact=1" alt="Tokscale Stats" width="640" />
  </a>
</p>
<p align="center">Building clinically grounded AI, Codex-first stage-led agent infrastructure, the One Person Lab desktop workbench, meta-agent tooling, independent domain agents, and auditable workflows for high-value knowledge work.</p>


<table>
  <tr>
    <td width="16%" valign="top">
      <strong>Academic Site</strong><br/>
      <a href="https://fenggaolab.org">fenggaolab.org</a>
    </td>
    <td width="16%" valign="top">
      <strong>OPL Framework</strong><br/>
      <a href="https://github.com/gaofeng21cn/one-person-lab"><code>One Person Lab</code></a>
    </td>
    <td width="16%" valign="top">
      <strong>OPL App</strong><br/>
      <a href="https://github.com/gaofeng21cn/one-person-lab-app"><code>One Person Lab App</code></a>
    </td>
    <td width="16%" valign="top">
      <strong>Agent Foundry</strong><br/>
      <a href="https://github.com/gaofeng21cn/opl-meta-agent"><code>OPL Meta Agent</code></a>
    </td>
    <td width="18%" valign="top">
      <strong>Medical Domain Agents</strong><br/>
      <a href="https://github.com/gaofeng21cn/med-autoscience"><code>Med Auto Science</code></a><br/>
      <a href="https://github.com/gaofeng21cn/med-autogrant"><code>Med Auto Grant</code></a>
    </td>
    <td width="18%" valign="top">
      <strong>Visual Domain Agent</strong><br/>
      <a href="https://github.com/gaofeng21cn/redcube-ai"><code>RedCube AI</code></a>
    </td>
  </tr>
</table>



## Current Public Entry

This profile serves as a public entry point for my academic and technical work in medical AI, research systems, and clinically grounded workflow design.

The current public surfaces are:

- [`fenggaolab.org`](https://fenggaolab.org) for academic information
- [`One Person Lab`](https://github.com/gaofeng21cn/one-person-lab) as the Codex-first, stage-led OPL Framework for automated delivery of high-value knowledge work
- [`One Person Lab App`](https://github.com/gaofeng21cn/one-person-lab-app) as the desktop workbench, installer, release, and user-facing product repository for OPL
- [`OPL Meta Agent`](https://github.com/gaofeng21cn/opl-meta-agent) as the meta-agent for building new OPL-compatible agents, taking over Agent Lab testing, and organizing mechanism self-evolution
- [`Med Auto Science`](https://github.com/gaofeng21cn/med-autoscience) as an independent medical research domain agent with a single `med-autoscience` app skill
- [`Med Auto Grant`](https://github.com/gaofeng21cn/med-autogrant) as an independent medical grant domain agent with a single `med-autogrant` app skill
- [`RedCube AI`](https://github.com/gaofeng21cn/redcube-ai) as an independent visual-deliverable domain agent with a single `redcube-ai` app skill

## One Person Lab

[`One Person Lab`](https://github.com/gaofeng21cn/one-person-lab) is the OPL Framework: a complete agent runtime framework for a one-person research lab and other high-value knowledge work. It is Codex-first and stage-led: large tasks are organized into stages that resemble how human experts execute the work, and Codex CLI is the smallest execution unit inside each stage.

It currently owns:

- the framework-level stage model, session/runtime coordination, progress projection, and artifact discovery surfaces
- Codex-first execution through CLI/MCP/product-entry contracts, app skills, and explicit domain-agent activation
- shared family contracts, indexes, provider adapters, health checks, and thin coordination surfaces
- support for external runtime providers where useful, without moving domain truth out of the owning domain agents
- machine-readable interfaces consumed by the desktop App and other shells

[`One Person Lab App`](https://github.com/gaofeng21cn/one-person-lab-app) is the separate user-facing desktop product. It owns the installer, desktop packages, release assets, updater metadata, first-run checks, screenshots, and user documentation. It packages the OPL Framework, domain agents, and companion tools into a workbench for daily use, while the framework repo keeps runtime, activation, contracts, module management, and machine-readable App interfaces.

Domain agents keep their own canonical domain truth, stable callable surfaces, audit writeback, runtime records, and delivery boundaries.

The public product model is:

```text
OPL Framework -> One Person Lab App -> Foundry Agents
```

## Current System Shape

```text
Human
  -> One Person Lab App for daily workbench use
      -> One Person Lab framework
          -> Codex-first session/runtime
          -> Stage-led task execution
          -> Progress, files, settings, health, and artifact discovery
          -> Explicit domain-agent activation when specialized work is needed
              -> Research Foundry -> Med Auto Science app skill
              -> Grant Foundry -> Med Auto Grant app skill
              -> Presentation Foundry -> redcube-ai app skill
              -> Agent Foundry -> OPL Meta Agent

Developer / operator path
  -> One Person Lab framework
      -> Codex-first session/runtime
      -> Stage-led task execution
      -> Progress, files, settings, health, and artifact discovery
      -> Explicit domain-agent activation when specialized work is needed
          -> Research Foundry -> Med Auto Science app skill
          -> Grant Foundry -> Med Auto Grant app skill
          -> Presentation Foundry -> redcube-ai app skill
          -> Agent Foundry -> OPL Meta Agent

Execution unit:
  Codex CLI inside a stage

Integration/reference layer:
  CLI, MCP, product-entry contracts, runtime provider adapters, OPL Runtime Manager projections, App-consumed interfaces, and repo-tracked schemas
```

## Active Domain Agents

| Product family | Active domain agent | Public role | Main outputs |
| --- | --- | --- | --- |
| `Agent Foundry` | [`OPL Meta Agent`](https://github.com/gaofeng21cn/opl-meta-agent) | Meta-agent for building and testing OPL-compatible agents | Agent baselines, Agent Lab suites, mechanism patch proposals |
| `Research Foundry` | [`Med Auto Science`](https://github.com/gaofeng21cn/med-autoscience) | Independent medical research domain agent | Study workspaces, evidence packages, manuscripts, submission materials |
| `Grant Foundry` | [`Med Auto Grant`](https://github.com/gaofeng21cn/med-autogrant) | Independent medical grant domain agent | Grant directions, proposal drafts, review packs, submission-ready packages |
| `Presentation Foundry` | [`RedCube AI`](https://github.com/gaofeng21cn/redcube-ai) | Independent visual-deliverable domain agent | Slide decks, scripts, reviewable visual artifacts, export bundles |

`MedDeepScientist` is no longer a MAS default runtime dependency. It remains only as a MAS-declared source-provenance, historical-fixture, explicit archive-import, backend-audit, upstream-intake, and parity-oracle reference, not as a top-level public domain agent.

Future workstreams such as `IP Foundry`, `Award Foundry`, `Thesis Foundry`, and `Review Foundry` stay in definition until their domain package and public boundary are ready.

## Domain Lines

[`OPL Meta Agent`](https://github.com/gaofeng21cn/opl-meta-agent) is the current active implementation on the `Agent Foundry` line.

It focuses on meta-agent operations, including:

- target-agent intent and boundary clarification
- public-pattern research and stage decomposition
- OPL-compatible agent package generation
- Agent Lab suite generation and testing takeover
- mechanism patch proposals for gated self-evolution

[`Med Auto Science`](https://github.com/gaofeng21cn/med-autoscience) is the current active medical research implementation on the `Research Foundry` line.

It focuses on medical research operations, including:

- disease-workspace organization
- data governance
- study progression
- evidence packaging
- manuscript and submission delivery

[`Med Auto Grant`](https://github.com/gaofeng21cn/med-autogrant) is the active medical grant implementation on the `Grant Foundry` line.

It focuses on author-side grant operations, including:

- direction screening
- question refinement
- argument building
- proposal drafting
- critique, revision, and package export

[`RedCube AI`](https://github.com/gaofeng21cn/redcube-ai) is the active visual-deliverable implementation on the `Presentation Foundry` line.

It currently focuses on:

- `ppt_deck` and presentation-grade visual delivery
- visual deliverable governance and review loops
- agent-first production of audited visual artifacts

Distribution-wise, the App repository owns desktop packaging, releases, updater metadata, and user-facing installation. The domain agents are consumed through OPL-managed module installation and current Packages/GHCR-backed coordinates, while each domain repo keeps its own authority over domain truth and delivery readiness.

Together, the current public shape is:

`One Person Lab -> explicit MAS activation -> Med Auto Science`

alongside:

`One Person Lab -> explicit MAG activation -> Med Auto Grant`

alongside:

`One Person Lab -> explicit RCA activation -> RedCube AI`

alongside:

`One Person Lab -> OPL Meta Agent -> new OPL-compatible agents`

## Research Focus

My current work is centered on:

- clinically grounded AI for colorectal cancer
- agent-first, human-auditable domain systems
- medical research workflow design
- Codex-first, stage-led agent infrastructure for high-value knowledge work

## Selected Links

- Academic site: [fenggaolab.org](https://fenggaolab.org)
- One Person Lab: [gaofeng21cn/one-person-lab](https://github.com/gaofeng21cn/one-person-lab)
- One Person Lab App: [gaofeng21cn/one-person-lab-app](https://github.com/gaofeng21cn/one-person-lab-app)
- OPL Meta Agent: [gaofeng21cn/opl-meta-agent](https://github.com/gaofeng21cn/opl-meta-agent)
- Med Auto Science: [gaofeng21cn/med-autoscience](https://github.com/gaofeng21cn/med-autoscience)
- Med Auto Grant: [gaofeng21cn/med-autogrant](https://github.com/gaofeng21cn/med-autogrant)
- RedCube AI: [gaofeng21cn/redcube-ai](https://github.com/gaofeng21cn/redcube-ai)
