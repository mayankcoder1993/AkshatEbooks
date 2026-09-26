# SGK Cross-Book Reference System

System ID: H17
Layer: Unified
Version: 2.0.0

---

## Purpose

When a reader finishes one SGK book and picks up another
in the same series, or in an adjacent series, they should
experience the satisfaction of recognition: the same mentor,
the same world, a familiar concept now seen from a new angle.

Cross-book references create this connected universe effect.
They also create genuine pedagogical value: understanding
how concepts across books connect deepens mastery of both.

---

## Eligibility Rules

RULE 1: Only published books.
A universe-link block may only reference a book registered
in registry/registry.json with status: published.
Never forward-reference a planned but unwritten book.
Never reference a book that is in-progress.

RULE 2: Genuine pedagogical connection.
The connection between the two books' concepts must be
real and useful to the reader. Not promotional.
Test: could the reader use the referenced concept from the
other book to deepen their understanding of the current concept?
If yes: the link is eligible.
If the connection is "you might also enjoy": the link is not
eligible and should go on the cross-sell page instead.

RULE 3: Maximum frequency.
Maximum 2 universe-link blocks per chapter.
Maximum 10 universe-link blocks per book.
If more connections exist, select the most pedagogically
valuable ones. The rest belong on the cross-sell page.

RULE 4: Connection type integrity.
FOUNDATIONAL: The referenced book teaches what this concept
  builds on. The reader who has not read it will be missing
  context. Use this sparingly: only when the connection is
  genuinely prerequisite, not just helpful.
PARALLEL: The referenced book covers this concept from a
  different angle. Both deepen the same understanding.
  The reader who has read it will find a richer connection.
ADVANCED: The referenced book extends this concept further.
  This book covers the foundation. The other goes deeper.

---

## The universe-link Block Rendering

In HTML Interactive Edition:
  A styled callout panel with series accent colour border.
  Left column: Madhubani-style character portrait thumbnail
    of the referenced book's mentor character, loaded from
    framework/characters/ ledger image reference.
  Right column: Book title in bold, series badge, chapter
    reference, connection type label.
  Below: Connection text in the current book's mentor voice.
    1 to 2 sentences. Natural, not promotional.
  Bottom: Clickable button: Read in [Book Title].
    Opens the referenced book's HTML edition if accessible.

In DOCX:
  Styled text box with CONNECTED UNIVERSE header.
  Book title and chapter reference in bold.
  Connection text in italic.

In PDF:
  Same as DOCX with visual styling matching the brand.

In EPUB:
  Styled div with semantic markup for accessibility.

In Game:
  Unlockable lore card in the player's collection.
  The card shows the referenced mentor character in
  Madhubani style with a brief note from them:
  "In the [Book Title] we explored this from a different angle.
  If you want to go deeper: [connection text]."

---

## Cross-Book Reference Registry

Maintained in registry/cross-book-references.json

```json
{
  "references": [
    {
      "id": "xref-001",
      "sourceBook": "SGK-TECH-API-001",
      "sourceChapter": 2,
      "targetBook": "SGK-TECH-SEL-001",
      "targetChapter": 3,
      "connectionType": "PARALLEL",
      "connectionText": "[The connection text as it appears in the book]",
      "dateAdded": "[DATE]",
      "status": "ACTIVE"
    }
  ]
}
```

When a new book is published, the Registry Agent scans all
existing published books for potential cross-reference
opportunities and generates a candidate list for human review.
The human user selects which cross-references to activate.
Selected references are added to the registry and added as
universe-link blocks in the relevant chapters.
Those chapters must re-run Stage 7 audit after addition.
