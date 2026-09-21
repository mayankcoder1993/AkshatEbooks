import tempfile
import unittest
from pathlib import Path
import sys

PROJECT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(PROJECT))

from assistant import load_notes, normalize_score, route_command, save_notes
from models import Note


class ScoreTests(unittest.TestCase):
    def test_normal_score(self):
        self.assertEqual(normalize_score("7"), 7)

    def test_boundary_scores(self):
        self.assertEqual(normalize_score("0"), 0)
        self.assertEqual(normalize_score("10"), 10)

    def test_invalid_score(self):
        with self.assertRaises(ValueError):
            normalize_score("eleven")
        with self.assertRaises(ValueError):
            normalize_score("11")


class NoteTests(unittest.TestCase):
    def test_save_and_load_notes(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "notes.txt"
            save_notes([Note("Maths", "Practise fractions")], path)
            loaded = load_notes(path)
            self.assertEqual(str(loaded[0]), "Maths: Practise fractions")

    def test_list_route_reports_empty_state(self):
        output = []
        keep_running = route_command("list", [], [], tell=output.append)
        self.assertTrue(keep_running)
        self.assertEqual(output, ["No notes yet."])

    def test_quit_route_stops(self):
        self.assertFalse(route_command("quit", [], []))


if __name__ == "__main__":
    unittest.main()
