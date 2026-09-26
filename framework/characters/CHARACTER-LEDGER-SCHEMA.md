# Character Continuity Ledger Schema

Purpose: This schema defines every field that every
Tier 1 Superhero Mentor Ledger must contain. When
creating a new mentor for a new series, copy this
schema and populate every field completely.

No field is optional. If a field does not yet have
a value (because the series is new and some story
threads have not been planned yet), mark it as
[TO BE ESTABLISHED IN BOOK N] with a target book number.

---

## SECTION A: CORE IDENTITY

full_name: [Complete name as it appears in books]
series: [SGK series ID and name]
domain: [Subject domain(s) this mentor covers]
age_at_series_inception: [Age in the first book]
professional_role: [2 to 3 sentence professional background]

formative_experience:
  what_happened: [The specific event that shaped them]
  when: [Time period, not necessarily revealed to readers yet]
  consequence: [How this event directly created their
    teaching philosophy and approach]
  reveal_plan: [Which book and chapter this is revealed to
    readers. SEALED until then. Do not summarize in any
    content before the planned reveal.]

core_belief: [The one thing they know to be true about
  their subject that most people miss]

teaching_philosophy: [How they teach and why. Specific,
  not generic. What their method produces that other
  methods do not.]

principled_refusal: [The one thing they will never do
  in a teaching context, and why. This refusal must
  create at least one moment of tension per series.]

---

## SECTION B: VISUAL DESIGN SPEC

clothing_primary: [Main garment: specific item, specific
  colour, specific distinguishing detail]
clothing_secondary: [Second garment or layer]
clothing_accessory: [Optional: jewellery, headwear, etc.]
distinguishing_feature: [The ONE visual element that makes
  this character recognizable at thumbnail size in Madhubani art]
signature_prop:
  item: [What it is]
  colour_and_material: [Specific]
  how_held_or_used: [Specific position or action]
  symbolic_meaning: [What it represents]
  when_it_appears: [Rule for when the prop is in frame]

expression_range:
  default: [Neutral resting expression description]
  teaching_active: [Expression when explaining something]
  insight_moment: [Expression when delivering key insight]
  letting_hero_struggle: [Expression when deliberately
    not helping yet]
  rare_serious: [Expression for high stakes moments]
  never_seen: [Expressions this character never shows:
    e.g., panicked, defeated, condescending]

reference_sheet_path: [Path once generated, initially PENDING]

---

## SECTION C: VOICE AND PERSONALITY SPEC

vocabulary_tendencies: [Specific words and phrases this
  character uses frequently. 5 to 10 examples.]
sentence_patterns: [How they structure explanations.
  Do they ask questions first? Use analogies first?
  State conclusions first? Specific pattern.]
humour_style: [Dry / warm / self deprecating / none /
  combination. With examples.]
response_to_hero_mistake: [Exactly how they respond when
  the hero does something wrong. Specific behaviour.]
response_to_hero_success: [Exactly how they respond when
  the hero gets something right. Specific behaviour.]

authentic_dialogue_examples:
  [5 example lines that are genuinely this character.
  Each line should be impossible to attribute to any
  other SGK mentor.]

wrong_dialogue_examples:
  [5 example lines that are WRONG for this character.
  Lines another character might say but this one never would.
  These train agents on what to avoid.]

---

## SECTION D: SIGNATURE ELEMENTS

signature_phrases:
  [List of 2 to 4 memorable phrases this character says
  repeatedly. These become recognizable to series readers.]
  For each phrase:
    text: [The phrase]
    when_used: [The circumstances that trigger this phrase]
    first_appeared: [Book ID, Chapter N]
    usage_limit: [Maximum once per chapter / per mission /
      per book / unlimited]

signature_prop_interactions:
  [The specific thing this character does with their prop
  at key teaching moments. Described specifically enough
  that every artist and writer produces the same behaviour.]

analogy_domain: [The category of analogies they draw from.
  Food, architecture, nature, trade, cricket, etc.]
analogy_domain_rationale: [Why this domain. Connected to
  their formative experience and background.]

forbidden_analogies: [Categories of analogy this character
  would never use. Out of character for specific reasons.]

---

## SECTION E: ONGOING STORY THREADS

[One entry per thread. Updated after each published book.]

thread_[N]:
  name: [Thread title]
  type: [PERSONAL / PROFESSIONAL / RELATIONSHIP / MYSTERY]
  introduced_in: [Book ID, Chapter N, Scene N]
  how_planted: [What the reader sees: the specific detail
    or moment that introduces this thread]
  what_is_hidden: [What the reader does not yet know.
    SEALED content until revealed.]
  planned_reveal: [Book ID tentative, Chapter N tentative,
    or UNSCHEDULED]
  current_status: [ACTIVE / RESOLVED / DORMANT]
  handling_rule: [Specific instruction for how to treat
    this thread in chapters before its planned reveal:
    reference obliquely / ignore completely / develop slowly]

---

## SECTION F: BOOK APPEARANCE LOG

[One entry per published book featuring this mentor. Updated
after each book is published.]

book_[book_id]:
  title: [Book title]
  hero: [Hero character name for that book]
  key_moments: [2 to 3 sentence summary of the mentor's
    most significant moments in this book]
  relationship_development: [How the mentor and hero dynamic
    evolved across this book]
  new_facts_established: [Facts about the mentor revealed
    for the first time in this book]
  analogies_used: [Complete list of analogies used.
    These cannot be introduced as new in future books.]
  story_thread_changes: [Status changes to any thread
    during this book]

---

## SECTION G: THE MENTOR'S OWN ARC

series_starting_point:
  current_belief: [What they currently believe at
    Book 1 of the series]
  current_wound: [The unresolved pain or question
    from their formative experience]
  current_professional_challenge: [What they are
    navigating professionally across the series]

series_destination:
  where_heading: [What subtle change will have occurred
    by the final planned book in this series]
  this_is_not_dramatic: [Confirm: the change is subtle
    and real, not a plot level transformation]

planned_arc_moments:
  [2 to 5 specific moments across planned books where
  the mentor reveals more of themselves to that book's hero]
  For each:
    planned_book: [Book ID or sequence number]
    what_is_revealed: [Specific]
    what_it_changes: [How this shifts the reader's
      understanding of this mentor]
