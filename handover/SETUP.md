# Install the Play+ editing skill

The package is `playplus-editor.zip`; its source is `skills/playplus-editor/SKILL.md`. It contains instructions only, with no executable code or credentials. It is prepared for installation, not yet active in either agent. GitHub access and the preview workflow still need the setup described in [the implementation brief](IMPLEMENTATION-BRIEF.md).

## Recommended: install with the repository

Have the setup agent copy the skill folder into the connected website repository at the locations below. Review existing folders first and merge intentional updates rather than overwriting custom guidance. Commit the installed files so cloud sessions and other editors receive them.

| Agent | File location relative to repository root | Explicit invocation |
|---|---|---|
| Codex | `.agents/skills/playplus-editor/SKILL.md` | `$playplus-editor` |
| Claude Code | `.claude/skills/playplus-editor/SKILL.md` | `/playplus-editor` |

Use the same skill text in both locations. Keep `handover/skills/playplus-editor/SKILL.md` as the package source until implementation establishes another canonical location; update both installed copies and rebuild the ZIP together. Add short project instruction pointers so the editorial workflow is discoverable without remembering an invocation. Avoid duplicating the whole skill in those instruction files.

Once installed, start a fresh task in the correct repository. Ask the agent to identify the skill and content files before the first edit. Verify actual discovery in both products during onboarding; a file copied to Jussi's machine alone does not become available in someone else's cloud environment.

This repository approach removes the need for Mark and Olof to install anything individually after their repository access is set up.

## Optional: personal installation for local work

Unzip the package and place the `playplus-editor` folder in the agent's personal skills directory:

- Codex: `~/.agents/skills/playplus-editor/`, per current official documentation.
- Claude Code: `~/.claude/skills/playplus-editor/`.

Open a fresh session and verify discovery. Prefer the repository copy if both are present, removing redundant personal installations deliberately so old guidance does not shadow newer project instructions. Personal installation on a laptop does not configure a cloud repository or grant file access. For an older/custom Codex host, check that host's configured skill discovery rather than assuming its path matches current documentation.

## First practice task

> Use the Play+ editor skill. Create a draft replacing my author introduction with the copy below. Keep the current visual design, check the desktop and mobile result, and give me the preview link. I will review the draft before publishing. Here is the replacement copy: …

Follow-up:

> Shorten the second paragraph by about a third, keeping the meaning. Update the same draft and show me the revised preview.

Publication, once the concrete draft has been reviewed:

> Publish the approved version of this draft to the protected site and verify the result. Keep password protection in place.

## Verified scope

The skill format and ZIP can be checked locally. End-to-end discovery, account permissions, previews and publication must still be tested with the authors' connected coding environments. This package is intended for Codex and Claude Code; uploading it to an ordinary chat does not give that chat repository editing or deployment access.

Installation locations checked 11 September 2026 against [Codex skills](https://learn.chatgpt.com/docs/build-skills) and [Claude Code skills](https://code.claude.com/docs/en/skills).
