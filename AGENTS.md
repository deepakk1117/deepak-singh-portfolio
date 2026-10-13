<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep editable profile, skill, and project content in `src/lib/portfolio.ts` and reusable portfolio sections in `src/components/portfolio` so content remains consistent across pages.
- Use the root route for the shared header and footer, with separate content routes for navigable portfolio sections so each page has its own metadata.
- Reference uploaded portraits through a Lovable Assets JSON pointer to keep original binary media outside the repository.
