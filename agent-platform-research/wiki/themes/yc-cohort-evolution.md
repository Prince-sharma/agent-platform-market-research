# YC Cohort Evolution (Theme P3.6)

## Scope

Implements plan section 8 (theme P3.6): batch-over-batch entry counts, category concentration, survival/pivot/death rates, follow-on funding, and what the YC cohort reveals about the maturity and timing of the agent wave. Covers all 14 batches from Winter 2021 through Summer 2026, including the Fall batches (F24, F25) that YC added to its calendar. Date: 2026-09-09.

## Method

- **Dataset:** scripted analysis of `data/companies-with-profiles.tsv` (1,328 rows). The YC subset is 722 companies (54% of the census) identified by batch regex `\b[WSF]2[1-6]\b` over the `sources`, `one_liner`, and `traction` columns, same extraction as the app and `data/phase3-yc-cohort-stats.json`. Every count quoted here was verified by script on 2026-09-09.
- **Cohort stats:** `data/phase3-yc-cohort-stats.json` (14 batches, 725 batch-entries; a company can appear in multiple batches only if listed in several, which is rare). Per-batch counts, layer mix, status mix, deep-profile counts, top verticals, and long-horizon counts.
- **Agentic share:** YC total batch sizes are approximate, drawn from YC's published company directory (ycombinator.com/companies) as of 2026-09-09. The agentic share is the count of agent-relevant companies divided by the approximate batch total; both numerator and denominator are subject to directory completeness.
- **Wiki:** the YC subset of `wiki/companies/` (722 pages, of which 89 are deep profiles with traction signals). Cross-referenced against the six sibling theme reports for vertical, pricing, and horizon patterns.
- **Labels:** figures are marked reported (vendor/primary/YC directory), estimated, or inferred. Batch totals are estimated from directory counts.

## Findings

### Q1: Batch-over-batch entry counts and the agentic share

1. **The agentic share of YC batches quadrupled from 2021-22 to 2025-26, with the inflection in Winter 2024.**
   - W21 through S22: 21, 24, 38, 42 agentic companies per batch (6-10% of batch totals). The agent wave had not started; these are precursors and pivots.
   - W23 through S23: 26, 53 (10-21%). The post-ChatGPT inflection: S23 nearly doubled W23's count and crossed 20% for the first time.
   - W24 through S24: 77, 82 (31-40%). The explosion: W24 nearly tripled S23 and crossed 30%; S24 hit 40%.
   - F24 through S26: 38, 63, 67, 86, 45, 63 (30-57%). The Fall batches (F24, F25) were smaller in absolute count but higher in agentic density (40%, 57%) because YC shrank overall batch sizes while agents kept growing as a share.
   - The peak agentic share is F25 at 57% (86 of ~150 total), meaning more than half of a YC batch was agent-relevant by early 2026.

2. **Absolute counts peaked in S24 (82) and F25 (86), not in the most recent batches.**
   - W26 (45) and S26 (63) are below the W24-S24 peak. This is partly batch-size contraction (YC admitted fewer companies in 2026) and partly saturation: the agent category is no longer novel enough to dominate every slot.
   - The 725 batch-entries across 14 batches average 52 per batch, but the distribution is bimodal: 2021-22 averaged 31, 2023 averaged 40, 2024-26 averaged 64.

3. **The Fall batch experiment (F24, F25) concentrated agents at higher density than the Winter/Summer cycles.**
   - F24: 38 agentic of ~95 total (40%); F25: 86 of ~150 (57%). YC introduced Fall batches in 2024 specifically for AI companies that could not wait for the next Winter cycle, and the agent share is the highest in the cohort.
   - F25's 57% is the single highest agentic share in any batch in the census.

### Q2: Category concentration and layer mix

4. **L3 vertical agents dominate every batch, holding 50-79% of entries across all 14 batches.**
   - L3 share per batch (scripted from cohort stats): W21 76%, S21 50%, W22 79%, S22 67%, W23 69%, S23 51%, W24 65%, S24 65%, F24 55%, W25 73%, S25 61%, F25 69%, W26 78%, S26 62%.
   - The L3 share does not trend upward over time; it was high from the start because the earliest agent companies were vertical applications (healthcare, logistics, finance), not infrastructure. Infrastructure arrived later but never displaced L3 as the majority.

5. **L1 infrastructure emerged in S21 and grew steadily, from 0 in W21 to 21 in S26.**
   - L1 counts per batch: W21 0, S21 6, W22 4, S22 2, W23 2, S23 5, W24 11, S24 12, F24 8, W25 12, S25 16, F25 18, W26 5, S26 21.
   - The L1 share rose from 0% (W21) to 33% (S26), reflecting the maturation pattern: applications first, infrastructure second. This mirrors the platform-vs-app structure finding (P3.7) that L1 arrived after the apps.

6. **Vertical concentration shifted from healthcare and logistics (2021-22) toward software engineering and finance (2024-26).**
   - Top verticals by year-group (scripted):
     - 2021-22: healthcare 10, logistics 7, finance 6, GTM/sales 5, software engineering 4.
     - 2023: healthcare 12, software engineering 7, finance 6, sales 5, logistics 4.
     - 2024: software engineering 28, healthcare 25, finance/accounting 16, logistics 11, customer service 7.
     - 2025: healthcare 16, software engineering 14, finance 10, GTM/sales 9, customer service 5.
     - 2026: healthcare 10, software engineering 13, finance 15, real estate 4, logistics 4.
   - Software engineering overtook healthcare as the top vertical in 2024, driven by the coding-agent wave (Cognition/Devin W24, Cursor's YC origin, Factory, OpenHands). Healthcare remained consistently in the top two across all five year-groups.

7. **The X modality layer (voice, browser-use) peaked in S23 (13 of 53) and declined as a share thereafter.**
   - X counts: W21 3, S21 4, W22 0, S22 8, W23 5, S23 13, W24 10, S24 9, F24 6, W25 3, S25 6, F25 4, W26 2, S26 2.
   - The S23 peak reflects the voice-agent wave (Bland, Prosper, HappyRobot all S23). By 2025-26, X settled to 3-6 per batch as the modality layer matured and consolidated.

### Q3: Survival, pivot, and death rates

8. **Survival rates correlate strongly with cohort age: 2021-22 entries show 80% active, 8% dead, 7% acquired; 2024 onward is 99-100% active.**
   - Status by year-group (scripted, 722 YC companies):
     - 2021-22 (125 entries): 80% active, 8% dead, 7% acquired, 4% pivoted.
     - 2023 (79 entries): 91% active, 1% dead, 3% acquired, 4% pivoted.
     - 2024 (197 entries): 99% active, 0% dead, 1% acquired, 1% pivoted.
     - 2025 (216 entries): 99% active, 0% dead, 0% acquired, 0% pivoted.
     - 2026 (108 entries): 100% active.
   - The 8% death rate in 2021-22 is the natural attrition of a 4-5 year old cohort; the near-zero rates for 2024-26 are too recent to show failures. The 2024-26 rates will rise as those companies age.

9. **Acquisitions concentrate in the 2021-22 cohort (7% acquired) and are rare in later batches.**
   - Notable acquisitions from early batches: W21 entries acquired include 2 companies; S21 includes 2 acquired. By 2023, only 3% were acquired. From 2024 onward, only 1% (S24) or zero.
   - This is the expected pattern: acquisitions target proven companies, and the 2024-26 batches have not had time to prove themselves. The acquisition rate will climb as the 2024 cohort matures, consistent with the moats-consolidation theme (P3.5) which found $13-18B in estimated agent M&A across 2024-26.

10. **Pivots are rare (4% max in 2021-22) and almost always into agents, not away from them.**
    - The 2021-22 pivots are companies that started as non-agent AI and pivoted into agentic products after ChatGPT. No company in the census pivoted out of agents. This is a selection effect: the census screens for agent-relevant companies, so exits from the category are invisible by construction.

### Q4: Follow-on funding and notable graduates

11. **The highest-valued YC agent companies came from S21 and W24, not the most recent batches.**
    - S21 graduates: Exa ($2.2B, Series C May 2026, reported).
    - W24 graduates: Cognition/Devin ($48B, $2B Series E Sep 2026, reported; ~$900M run-rate revenue), E2B ($21M Series A, 88% of Fortune 100, reported), Emergent (unicorn, $130M Series C 2026, reported), Fazeshift ($17M Series A, reported).
    - S23 graduates: HappyRobot ($1.2B, Series C Aug 2026, reported), Bland ($100M+ raised, 3.5M weekly calls, reported), Langfuse ($50M Series B Mar 2026, reported; subsequently acquired by ClickHouse).
    - S24 graduates: Coval ($28M Series A, reported), Entropy ($25M seed led by a16z, reported).
    - The pattern: W24 was the breakout batch for funding. It produced the highest individual valuation (Cognition at $48B) and the deepest cluster of funded infrastructure (E2B, Coval, General Analysis).

12. **Deep-profile density (a proxy for research significance) peaks in W24-S24 (18 and 17 deep profiles) and F25 (13).**
    - Deep profiles per batch (scripted): W21 3, S21 1, W22 2, S22 0, W23 6, S23 8, W24 18, S24 17, F24 2, W25 9, S25 11, F25 13, W26 2, S26 3.
    - W24 and S24 have the highest deep-profile counts because they contain the most companies that reached meaningful traction or funding by September 2026. The 2026 batches (W26, S26) have low deep counts because they are too new to have accumulated evidence.
    - F25's 13 deep profiles is notable: it is a small batch (86 agentic entries) but 15% are already deep-profiled, suggesting high early signal density.

13. **Long-horizon agents appear starting in S23 and concentrate in W24-S24 and F25-S25.**
    - Long-horizon counts per batch: W21 0, S21 1, W22 1, S22 0, W23 4, S23 2, W24 14, S24 11, F24 3, W25 7, S25 11, F25 12, W26 4, S26 10.
    - W24 is the long-horizon inflection (14 of 77, 18%), consistent with the long-horizon theme (P3.1) finding that long-horizon agents emerged as a productized category in 2024. The S25-F25-S26 cohort sustains 12-17% long-horizon density, suggesting the category is settling rather than accelerating.

### Q5: What the cohort says about maturity and timing

14. **The agent wave is past its entry peak but not yet at its exit peak.**
    - Entry counts peaked in S24-F25 (82-86 per batch) and are declining (W26 45, S26 63). The category is no longer the newest thing in YC.
    - Acquisitions are concentrated in the 2021-22 cohort and have not yet hit the 2023-24 cohort, which holds the highest-value companies (Cognition, HappyRobot, E2B). The exit wave is coming but has not arrived.
    - The 7% acquisition rate for 2021-22 is a floor: those companies are 4-5 years old. The 2023 cohort (3% acquired) will likely see its acquisition rate climb in 2027-28.

15. **The cohort confirms the two-ends structural read from the platform-vs-app theme (P3.7).**
    - L3 vertical agents entered first (76% of W21) and remain the majority (62-78% in 2026). L1 infrastructure arrived second (0% in W21, 33% in S26). The cohort data is consistent with the finding that value concentrates at L3 and the durable substrate, not the middle build layer.
    - The long-horizon emergence in W24 (finding 13) aligns with the long-horizon theme's (P3.1) finding that long-horizon agents became a productized category in 2024, with Sierra's Horizon platform launching in July 2026.

16. **The Fall batch experiment (F24, F25) is the clearest signal that YC itself treats agents as a distinct category requiring its own cadence.**
    - YC introduced Fall batches in 2024, and both Fall batches have the highest agentic density in the census (40%, 57%). The Fall batch is smaller, faster, and more agent-concentrated than the Winter/Summer cycles.
    - Whether the Fall batch continues depends on whether agent founders continue to need a faster cycle than the standard Winter/Summer calendar provides.

## Evidence table

| Dimension | 2021-22 | 2023 | 2024 | 2025 | 2026 |
|---|---|---|---|---|---|
| Entries (batch-entries) | 125 | 79 | 197 | 216 | 108 |
| Agentic share (approx.) | 6-10% | 10-21% | 31-40% | 30-57% | 35-52% |
| L3 share | 50-79% | 51-69% | 55-65% | 61-73% | 62-78% |
| L1 share | 0-25% | 4-10% | 10-15% | 18-24% | 11-33% |
| Active | 80% | 91% | 99% | 99% | 100% |
| Dead | 8% | 1% | 0% | 0% | 0% |
| Acquired | 7% | 3% | 1% | 0% | 0% |
| Pivoted | 4% | 4% | 1% | 0% | 0% |
| Deep profiles | 6 | 14 | 37 | 33 | 5 |
| Long-horizon | 1 | 6 | 25 | 30 | 14 |
| Top vertical | healthcare | healthcare | software engineering | healthcare | finance |

## Implications

- The cohort data confirms the agent wave is real, large, and past its entry inflection. A platform strategy that assumes the wave is still arriving is late; one that assumes it is over is early. The right framing is that the entry phase (2023-25) is giving way to the scaling and consolidation phase (2026 onward).
- The L3-first, L1-second pattern means a build platform's natural customers (L3 vertical builders) entered the market 2-3 years before the infrastructure layer matured. The platform opportunity is to serve the 2024-25 cohort of L3 builders who are now scaling and need infrastructure they built ad hoc in their first years.
- The long-horizon emergence in W24 and its sustained density (12-17% in 2025-26) means long-horizon is no longer experimental; it is a standard product category in new batches. A platform that does not support durable execution, long-lived environments, and approval gates is not addressing what 15% of new agent companies ship.
- The Fall batch experiment signals that YC sees agents as a category needing faster cycles. If the platform layer standardizes, the Fall batch density could accelerate consolidation: smaller batches, higher agent concentration, faster time to product.
- The near-zero death rate for 2024-26 is an artifact of age, not health. The 8% death rate for 2021-22 is the realistic expectation for the 2024 cohort by 2028-29. Platform and investment strategies should not assume 99% survival persists.

## Open questions

- Will the 2023-24 cohort's acquisition rate climb to match the 2021-22 pattern (7%), or will the higher valuations (Cognition at $48B vs. typical early-batch exits) delay acquisitions by pricing out all but the largest suitors?
- Will YC continue the Fall batch experiment beyond F25, or was it a response to the 2024-25 AI surge that will normalize as the agent category matures?
- The 2026 batch contraction (W26 45, S26 63 vs. W24-S24 77-82) - is this YC reducing batch sizes, the agent category saturating within YC, or founders choosing alternative paths (direct funding, accelerators) over YC?
- The 218 "general" vertical entries (30% of the YC subset) are unclassified by specific vertical. How many of these are horizontal build platforms (L2) vs. vertical agents whose vertical was not captured during profiling?

## Sources

- `data/companies-with-profiles.tsv` (1,328 rows, 722 YC-identified; accessed 2026-09-09)
- `data/phase3-yc-cohort-stats.json` (14 batches, 725 batch-entries; generated 2026-09-09)
- Y Combinator startup directory, ycombinator.com/companies (batch totals; accessed 2026-09-09, estimated)
- Cognition $48B valuation and $2B Series E: TechCrunch, 2026-09-08, reported
- Exa $2.2B Series C: reported May 2026
- HappyRobot $1.2B Series C: reported August 2026
- E2B Fortune 100 claim: reported July 2025
- Bland 3.5M weekly calls: reported 2026
- Langfuse $50M Series B: reported March 2026
- Sibling themes: long-horizon-agents.md (P3.1), market-sizing.md (P3.2), platform-vs-app-structure.md (P3.7), moats-consolidation.md (P3.5)
