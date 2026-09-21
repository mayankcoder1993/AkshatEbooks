from pathlib import Path
from models import Note


def normalize_score(raw):
    try:
        score = int(raw)
    except ValueError as error:
        raise ValueError("Score must be a whole number") from error
    if not 0 <= score <= 10:
        raise ValueError("Score must be from 0 to 10")
    return score


def save_notes(notes, path):
    lines = [f"{note.title}\t{note.text}" for note in notes]
    Path(path).write_text("\n".join(lines), encoding="utf-8")


def load_notes(path):
    note_path = Path(path)
    if not note_path.exists():
        return []
    notes = []
    for line in note_path.read_text(encoding="utf-8").splitlines():
        title, separator, text = line.partition("\t")
        if separator and title.strip() and text.strip():
            notes.append(Note(title, text))
    return notes


def route_command(command, notes, history, ask=input, tell=print):
    clean_command = command.strip().lower()
    history.append(clean_command)
    if clean_command == "help":
        tell("Commands: help, add, list, score, quit")
    elif clean_command == "add":
        notes.append(Note(ask("Title: "), ask("Note: ")))
        tell("Note saved.")
    elif clean_command == "list":
        if not notes:
            tell("No notes yet.")
        for number, note in enumerate(notes, start=1):
            tell(f"{number}. {note}")
    elif clean_command == "score":
        score = normalize_score(ask("Practice score from 0 to 10: "))
        tell(f"Score saved for this session: {score}/10")
    elif clean_command == "quit":
        return False
    else:
        tell("Unknown command. Type help.")
    return True


def run(data_path="notes.txt", ask=input, tell=print):
    notes = load_notes(data_path)
    history = []
    tell("STUDY ASSISTANT")
    tell("Type help to see a command.")
    running = True
    while running:
        try:
            running = route_command(ask("Command: "), notes, history, ask, tell)
        except ValueError as error:
            tell(str(error))
    save_notes(notes, data_path)
    tell("Goodbye!")
    return history
