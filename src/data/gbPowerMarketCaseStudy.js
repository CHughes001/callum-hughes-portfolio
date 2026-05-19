export const CASE_STUDY_META = {
  slug: 'gb-power-market',
  title: 'GB Power Market Analytics Pipeline',
  subtitle: 'BMRS API → SQLite → Power BI',
  tagline:
    'How renewable penetration reshapes thermal dispatch economics and settlement-period balancing prices in GB.',
  github: 'https://github.com/CHughes001/',
  linkedin: 'https://www.linkedin.com/in/callumhughes0/',
}

export const HERO_KPIS = [
  { value: '63', label: 'Negative price periods', unit: '' },
  { value: '−11', label: 'Avg clean spark spread', unit: '£/MWh' },
  { value: '36.8', label: 'Avg wind share', unit: '%' },
  { value: '76.89', label: 'Avg system buy price', unit: '£/MWh' },
]

export const HERO_TECH = ['Python', 'SQL', 'Power BI', 'BMRS API', 'Energy markets']

export const TOC_SECTIONS = [
  { id: 'cs-overview', label: 'Overview' },
  { id: 'cs-architecture', label: 'Architecture' },
  { id: 'cs-dashboards', label: 'Dashboards' },
  { id: 'cs-insights', label: 'Key insights' },
  { id: 'cs-deep-dives', label: 'Technical detail' },
  { id: 'cs-challenges', label: 'Challenges' },
  { id: 'cs-stack', label: 'Tech stack' },
  { id: 'cs-cta', label: 'Next steps' },
]

export const PIPELINE_LAYERS = [
  {
    name: 'Staging',
    detail: 'Raw BMRS preserved — system prices, fuel mix, demand.',
  },
  {
    name: 'Transformation',
    detail: 'Market logic — unit conversions, spreads, wind penetration.',
  },
  {
    name: 'Serving',
    detail: 'Star-schema fact table optimised for Power BI filtering.',
  },
]

export const PIPELINE_SCRIPTS = [
  { script: 'fetch_data.py', role: 'BMRS ingestion via Elexon API' },
  { script: 'load_commodity_prices.py', role: 'Gas & carbon into dim_commodity_prices' },
  { script: 'calculate_spreads.py', role: 'Conversion formulas and spread logic' },
  { script: 'build_powerbi_fact.py', role: 'Merge + validate fact_power_market' },
]

export const STAR_SCHEMA = [
  { table: 'fact_power_market', note: 'SP-granular prices, fuel mix, spreads' },
  { table: 'dim_date', note: 'Time intelligence in DAX' },
  { table: 'dim_commodity_prices', note: 'Daily gas (p/therm) & carbon (€/tCO₂)' },
  { table: 'stg_fuel_mix', note: 'FUELINST generation by fuel per SP' },
]

export const DASHBOARD_TABS = [
  {
    id: 'intraday',
    label: 'Intraday balancing',
    purpose: 'Settlement-period volatility that daily averages hide.',
    commentary: [
      'The heatmap displays a midday pricing trough across SP27–32 (13:00–16:00), where average SBP falls to £21–£42/MWh versus evening peaks above £110/MWh in SP39–41.',
      'Negative pricing is heavily concentrated in the solar-heavy afternoon window. SP32 recorded the highest number of negative settlement periods, while SP30 reached the dataset low at -£97.92/MWh',
      'Filtering to 5–6 April shows prolonged midday suppression, with prices remaining below zero for multiple consecutive settlement periods as renewable generation outpaced demand and therefore producing an oversupply.',
      'Settlement-period detail captures volatility and imbalance stress that daily averages hide.',
    ],
    
    images: [
      {
        src: '/projects/gb-power-market/intraday-6april-comb.png',
        alt: 'Intraday balancing heatmap and price shape for 6 April 2026',
        caption: '6 April — heatmap + intraday SBP/SSP shape',
      },
      {
        src: '/projects/gb-power-market/intraday-full-comb.png',
        alt: 'Full-period intraday balancing dashboard',
        caption: '10-day view — settlement period × date heatmap',
      },
      {
        src: '/projects/gb-power-market/intraday-6april.png',
        alt: 'Intraday balancing detail for 6 April',
        caption: '6 April — midday trough in settlement periods',
      },
    ],
  },
  {
    id: 'regime',
    label: 'Market regime',
    purpose: 'Price levels, clean spark spread, and wind across the sample window.',
    commentary: [
      'This page connects renewable penetration to price volatility -  a defining relationship for Great Britain’s electricity market.',
      'The dataset separates into two distinct market regimes: lower-wind days with positive clean spark spreads and high-wind days characterised by suppressed prices and frequent negative settlement periods.',
      'The 5th of April was the clearest stress event: average SBP fell to £15.50/MWh, with 22 of 48 settlement periods pricing negatively.',
      'High-wind days (>45% average wind share) averaged £51/MWh SBP and -£33.62/MWh CSS, versus £96/MWh SBP and +£5.20/MWh CSS on low-wind days.',
      'The evening block highlights how prices recover as solar generation falls and thermal generation returns to the margin, though recovery remained muted on the highest-wind days.'
    ],
    
    images: [
      {
        src: '/projects/gb-power-market/market-regime-full.png',
        alt: 'Market regime overview — SBP, SSP, CSS, and period counts',
        caption: 'Unfiltered 10-day regime view',
      },
      {
        src: '/projects/gb-power-market/market-regime-evening.png',
        alt: 'Market regime filtered to evening settlement blocks',
        caption: 'Evening block — prices recover as solar falls',
      },
    ],
  },
  {
    id: 'economics',
    label: 'Trading economics',
    purpose: 'Link balancing prices to gas, carbon, and merit-order dispatch.',
    commentary: [
      'Unfiltered waterfall: SBP £77 → fuel −64 → carbon −24 → CSS −22/MWh. CCGTs lose on variable costs across the window - Gas is simply expensive relative to the power price',
      'Medium wind days flip CSS to +£8/MWh — a £39/MWh swing from the all-days average, quantifying merit-order suppression.',
      'Wind regime materially changed the economics. Medium-wind days averaged near break-even CSS, while high-wind days averaged -£33.62/MWh.'
    ],
    
    images: [
      {
        src: '/projects/gb-power-market/trading-economics-full.png',
        alt: 'Trading economics — spark spread, waterfall, wind vs CSS',
        caption: 'All wind buckets — dispatch economics',
      },
      {
        src: '/projects/gb-power-market/trading-economics-medium-wind.png',
        alt: 'Trading economics filtered to medium wind',
        caption: 'Medium wind — marginal CCGT profitability returns',
      },
    ],
  },
]

export const KEY_INSIGHTS = [
  {
    stat: '£65',
    unit: '/MWh',
    title: 'Clean spark spread swing',
    body: 'High vs medium wind days — merit-order suppression quantified from April 2026 BMRS data.',
  },
  {
    stat: '13%',
    unit: '',
    title: 'Settlement periods negative',
    body: '63 of 480 half-hours with negative SBP — volatility invisible in daily averages.',
  },
  {
    stat: '32',
    unit: 'SPs',
    title: 'Negative on 5 April alone',
    body: 'Only 16 positive periods that day — weekend demand plus solar peak drove deep midday suppression.',
  },
]

export const OUTCOME_KPIS = [
  { value: '£65', label: 'CSS swing (high vs medium wind)' },
  { value: '13%', label: 'SPs with negative price' },
  { value: '3', label: 'Dashboard pages' },
  { value: '480', label: 'Settlement periods analysed' },
]

export const DEEP_DIVE_ITEMS = [
  {
    title: 'Energy market logic',
    content: `**Settlement periods** — 48 half-hour slots per day (SP1 00:00–00:30 … SP48 23:30–00:00). Stress events and wind ramps disappear in daily means.

**SBP / SSP** — System Buy Price (short on system) vs System Sell Price (long). SBP ≥ SSP creates imbalance cashout asymmetry; high SBP signals scarcity.

**Wind penetration** — \`wind_pct = wind_MW / total_MW\` from FUELINST. Zero-marginal-cost wind displaces gas on the merit order and suppresses prices.`,
  },
  {
    title: 'Transformation logic',
    content: `| Step | Output |
|------|--------|
| Gas conversion | NBP p/therm → £/MWh(th) via **0.0293071** |
| Carbon conversion | €/tCO₂ → £/MWh(e) via **0.36** tCO₂/MWh(e) |
| Wind penetration | \`wind_pct\` per SP |
| Spark spread | \`SBP − (gas_gbp_mwh × heat_rate)\` |
| Clean spark spread | \`spark_spread − carbon_gbp_mwh\` |

Heat rate ~**1.9** MWh(th)/MWh(e) for CCGT (~50% efficiency).`,
  },
  {
    title: 'Unit conversions',
    content: `**Gas:** \`gas_gbp_per_therm = p_per_therm / 100\` then \`÷ 0.0293071\` → £/MWh thermal input.

**Carbon:** \`carbon_gbp_mwh = eur_per_tco2 × FX × 0.36\`

Constants isolated in \`calculate_spreads.py\` for auditability.`,
  },
  {
    title: 'Pipeline scripts',
    content: `Modular, scheduler-ready pipeline:

• \`fetch_data.py\` — endpoint-specific BMRS pulls  
• \`load_commodity_prices.py\` — gas & carbon CSVs  
• \`calculate_spreads.py\` — spreads + validation  
• \`build_powerbi_fact.py\` — \`fact_power_market\` merge

Key: **(date, settlement_period)** preserves intraday shape.`,
  },
  {
    title: 'Technical challenges',
    content: `BMRS endpoints use inconsistent date parameters — resolved with per-endpoint fetch functions.

SQLite locking when DB Browser is open — close before pipeline runs.

Power BI Free scatter limits — pre-aggregate daily wind/CSS in a SQLite view.

Multi-unit chains (p/therm, €/tCO₂, £/MWh) documented at each step.`,
  },
]

export const CHALLENGES = [
  {
    problem: 'BMRS API inconsistency',
    resolution:
      'Per-endpoint fetch functions after reading Elexon docs (settlementDate vs publishDateTime).',
    learning: 'Production energy data rarely ships with one uniform API contract.',
  },
  {
    problem: 'SQLite concurrency',
    resolution: 'Close DB Browser before Python writes; single-writer discipline.',
    learning: 'Local analytics workflows need the same locking awareness as shared warehouses.',
  },
  {
    problem: 'Power BI scatter summarisation',
    resolution: 'Pre-aggregate wind vs CSS to daily grain in SQLite; connect as a table.',
    learning: 'Model grain in the pipeline when the BI tier cannot unsummarise.',
  },
  {
    problem: 'Unit conversion complexity',
    resolution: 'Isolated constants in calculate_spreads.py with inline documentation.',
    learning: 'Trader metrics fail silently when therm → MWh(th) → MWh(e) chains are opaque.',
  },
]

export const TECH_STACK_GROUPS = [
  {
    category: 'Ingestion & storage',
    items: ['Python', 'Elexon BMRS API', 'SQLite', 'CSV commodities'],
  },
  {
    category: 'Transformation',
    items: ['pandas', 'SQL views', 'Market spread logic', 'Validation checks'],
  },
  {
    category: 'Analytics & delivery',
    items: ['Power BI', 'DAX', 'Star schema', 'Dashboard storytelling'],
  },
]
