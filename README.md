<h1 align="center">Feng GAO</h1>

<p align="center"><strong>Professor of Medical AI @ SYSU</strong></p>
<p align="center">
  <a href="https://tokscale.ai/u/gaofeng21cn">
    <img src="https://tokscale.ai/api/embed/gaofeng21cn/svg?theme=light&compact=1" alt="Tokscale Stats" width="640" />
  </a>
</p>
<p align="center">Building clinically grounded AI, one-person-lab workbenches, independent domain agents, and auditable workflow infrastructure.</p>


<table>
  <tr>
    <td width="25%" valign="top">
      <strong>Academic Site</strong><br/>
      <a href="https://fenggaolab.org">fenggaolab.org</a>
    </td>
    <td width="25%" valign="top">
      <strong>OPL Workbench</strong><br/>
      <a href="https://github.com/gaofeng21cn/one-person-lab"><code>One Person Lab</code></a>
    </td>
    <td width="25%" valign="top">
      <strong>Medical Domain Agents</strong><br/>
      <a href="https://github.com/gaofeng21cn/med-autoscience"><code>Med Auto Science</code></a><br/>
      <a href="https://github.com/gaofeng21cn/med-autogrant"><code>Med Auto Grant</code></a>
    </td>
    <td width="25%" valign="top">
      <strong>Visual Domain Agent</strong><br/>
      <a href="https://github.com/gaofeng21cn/redcube-ai"><code>RedCube AI</code></a>
    </td>
  </tr>
</table>



## Current Public Entry

This profile serves as a public entry point for my academic and technical work in medical AI, research systems, and clinically grounded workflow design.

The current public surfaces are:

- [`fenggaolab.org`](https://fenggaolab.org) for academic information
- [`One Person Lab`](https://github.com/gaofeng21cn/one-person-lab) as the top-level workbench for starting work, keeping progress visible, and collecting deliverables
- [`Med Auto Science`](https://github.com/gaofeng21cn/med-autoscience) as an independent medical research domain agent with a single MAS app skill
- [`Med Auto Grant`](https://github.com/gaofeng21cn/med-autogrant) as an independent medical grant domain agent with a single Med Auto Grant app skill
- [`RedCube AI`](https://github.com/gaofeng21cn/redcube-ai) as an independent visual-deliverable domain agent with a single `redcube-ai` app skill

## One Person Lab

[`One Person Lab`](https://github.com/gaofeng21cn/one-person-lab) is the top-level workbench for a one-person research lab: one place to start work, keep progress legible, and collect outputs while specialized product families keep their own methods and deliverables.

It currently owns:

- everyday collaboration, general tasks, and workspace-based work
- module installation, skill sync, service setup, and health checks
- workspace, session, progress, and artifact discovery surfaces
- family-level session/runtime/projection orchestration plus shared modules, contracts, and indexes
- visibility for Research, Grant, and Presentation Foundries from one workbench

Domain agents keep their own canonical domain truth, stable callable surfaces, audit writeback, runtime records, and delivery boundaries.

## Current System Shape

```text
Human
  -> One Person Lab workbench
      -> General work and workspace-based tasks
      -> Progress, files, settings, health, and module management
      -> Explicit domain-agent activation
          -> Research Foundry -> Med Auto Science app skill
          -> Grant Foundry -> Med Auto Grant app skill
          -> Presentation Foundry -> redcube-ai app skill

Default local execution:
  Codex-default session/runtime semantics

Integration/reference layer:
  CLI, MCP, product-entry contracts, projections, and repo-tracked schemas
```

## Active Domain Modules

| Product family | Active module | Public role | Main outputs |
| --- | --- | --- | --- |
| `Research Foundry` | [`Med Auto Science`](https://github.com/gaofeng21cn/med-autoscience) | Independent medical research domain agent | Study workspaces, evidence packages, manuscripts, submission materials |
| `Grant Foundry` | [`Med Auto Grant`](https://github.com/gaofeng21cn/med-autogrant) | Independent medical grant domain agent | Grant directions, proposal drafts, review packs, submission-ready packages |
| `Presentation Foundry` | [`RedCube AI`](https://github.com/gaofeng21cn/redcube-ai) | Independent visual-deliverable domain agent | Slide decks, scripts, reviewable visual artifacts, export bundles |

Future workstreams such as `Thesis Foundry` and `Review Foundry` stay in definition until their domain package and public boundary are ready.

## Domain Lines

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

Together, the current public shape is:

`One Person Lab -> explicit MAS activation -> Med Auto Science`

alongside:

`One Person Lab -> explicit MAG activation -> Med Auto Grant`

alongside:

`One Person Lab -> explicit RCA activation -> RedCube AI`

## Research Focus

My current work is centered on:

- clinically grounded AI for colorectal cancer
- agent-first, human-auditable domain systems
- medical research workflow design
- one-person-lab infrastructure for research, grant, and visual delivery work

## Selected Links

- Academic site: [fenggaolab.org](https://fenggaolab.org)
- One Person Lab: [gaofeng21cn/one-person-lab](https://github.com/gaofeng21cn/one-person-lab)
- Med Auto Science: [gaofeng21cn/med-autoscience](https://github.com/gaofeng21cn/med-autoscience)
- Med Auto Grant: [gaofeng21cn/med-autogrant](https://github.com/gaofeng21cn/med-autogrant)
- RedCube AI: [gaofeng21cn/redcube-ai](https://github.com/gaofeng21cn/redcube-ai)
