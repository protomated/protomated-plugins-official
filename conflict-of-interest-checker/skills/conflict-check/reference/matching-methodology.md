> METHODOLOGY REFERENCE, NOT A GUARANTEE OF COMPLETENESS. This describes how `/conflict-check` compares names — it is a reasoning aid, not a deterministic algorithm, and it will miss conflicts that don't show up as a name match at all (e.g., a business relationship, a co-counsel arrangement, or a family relationship not reflected in either name). It does not replace the attorney's own judgment or a firm's broader conflicts process.

# Name-Matching Methodology

Used by `/conflict-check` to compare a new matter's party names against the attorney's existing client/matter list. Every match — high or low confidence — must be traceable to one of the categories below. Never report a match without being able to say which category produced it.

---

## 1. Exact match

The new-matter name and an existing-list name are identical, or identical after case-normalization and whitespace trimming. Always **🔴 HIGH CONFIDENCE**.

## 2. Entity-suffix normalization

Business-entity names often differ only in how the entity type is abbreviated. Normalize before comparing:

| Written forms treated as equivalent |
|---|
| Inc. / Incorporated / Inc |
| LLC / L.L.C. / Limited Liability Company |
| Corp. / Corporation / Corp |
| Co. / Company |
| Ltd. / Limited |
| LP / L.P. / Limited Partnership |
| LLP / L.L.P. |
| PC / P.C. / Professional Corporation |
| PLLC / P.L.L.C. |

"Acme Corp" and "Acme Corporation" and "Acme, Inc." are the same underlying entity name for matching purposes (suffix stripped, core name compared) — flag as **🔴 HIGH CONFIDENCE** if the core name matches exactly after normalization. If the core name itself only partially matches (e.g., "Acme Holdings LLC" vs. "Acme Manufacturing LLC"), that's category 5 (partial/related name), not this category.

## 3. Personal-name variants (nicknames)

Common nickname pairs — treat a new-matter name and an existing-list name that differ only by a nickname substitution as a match, but rate it **🟡 LOW CONFIDENCE** (nickname substitution alone isn't as certain as an exact or suffix-normalized match — confirm the rest of the name, e.g. last name and any available identifying detail, lines up too before treating it as a strong signal).

Representative pairs (not exhaustive — apply the same reasoning to nickname patterns not listed):

| Formal | Common nicknames |
|---|---|
| Robert | Bob, Bobby, Rob, Robbie |
| William | Bill, Billy, Will, Liam |
| Richard | Rick, Rich, Dick, Ricky |
| James | Jim, Jimmy, Jamie |
| Elizabeth | Liz, Beth, Betty, Eliza, Lisa |
| Margaret | Meg, Maggie, Peggy, Marge |
| Katherine/Catherine | Kate, Katie, Cathy, Kat |
| Michael | Mike, Mikey, Mick |
| Charles | Chuck, Charlie, Chas |
| Joseph | Joe, Joey |
| Alexander | Alex, Xander, Sasha |
| Patricia | Pat, Patty, Trish |
| Anthony | Tony |
| Christopher | Chris |
| Daniel | Dan, Danny |
| Jennifer | Jen, Jenny |

Only apply this category to individuals — never infer a nickname relationship between two business-entity names.

## 4. Misspellings and transliteration variants

Treat as a possible match, rated **🟡 LOW CONFIDENCE**, when a new-matter name and an existing-list name are one plausible typo/transliteration apart:

- **Transposed letters:** "Sara" vs. "Saar" (unlikely to be intentional; flag).
- **Doubled/dropped letter:** "Stephenson" vs. "Stephensen," "Jonson" vs. "Johnson."
- **Common phonetic/transliteration variants:** "Mohammed" / "Muhammad" / "Mohamed"; "Katherine" / "Catherine"; "Stephen" / "Steven."
- **Diacritic differences:** "José" vs. "Jose," "Núñez" vs. "Nunez."

Don't stretch this category to cover names that just happen to share a few letters — the standard is "a reasonable person would suspect this is the same name typed differently," not "these names have overlapping characters."

## 5. Partial and related-name matches

- **Partial match on a distinctive surname:** the new matter's party shares an uncommon last name with someone on the existing list, but the first name differs entirely (could be a relative, could be coincidence). Rate **🟡 LOW CONFIDENCE** and say plainly that this is a surname-only match.
- **Common surname:** if the shared surname is common (Smith, Garcia, Lee, Johnson, etc.) and nothing else about the names lines up, this is weak enough to note only if the attorney is checking a small list — on a larger list, common-surname-only matches produce too much noise to be useful. Use judgment: on a short list (under ~30 entries), report as **⚪ NOT ADDRESSED — common surname, low signal**; don't manufacture a 🟡 flag from a common surname alone.
- **Maiden/married name changes and generational suffixes:** "Jane Smith" and "Jane Doe" won't match on name alone — this methodology can't detect a name change unless the existing list itself records a former name. Note this limitation to the attorney rather than silently missing it: if the existing list has any field indicating former/maiden names, use it; if not, say this category of conflict can't be checked by name-matching alone. Generational suffixes (Jr., Sr., II, III) should be stripped before comparing the base name, then treated as informative context, not as the reason two names are different people.

## 6. No match

Nothing in the new matter's party names corresponds to any entry in the existing list under any category above. Report as **⚪ NO MATCH FOUND** — never as "cleared" or "no conflict."

---

## Confidence tiers — summary

- **🔴 HIGH CONFIDENCE** — exact match, or entity-suffix-normalized exact match. Report prominently; this is the strongest signal a name-matching pass can produce.
- **🟡 LOW CONFIDENCE** — nickname substitution, misspelling/transliteration variant, or partial/related-name match. Always state which category produced the match and what would resolve the ambiguity (e.g., "confirm whether this is the same Robert Chen as the Chen Family Trust matter, or a different individual").
- **⚪ NOT ADDRESSED / NO MATCH FOUND** — no signal found, or the signal is too weak/common to report as an actionable flag (see common-surname guidance above).

A conflict report is a list of possible matches for the attorney to resolve — it is never a clearance. Even an entry with zero flags is reported as "no match found against the attached list," not "no conflict" or "cleared."
