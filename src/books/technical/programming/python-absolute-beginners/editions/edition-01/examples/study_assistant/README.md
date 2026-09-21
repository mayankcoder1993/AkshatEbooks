# Study assistant example

This is the executable result of the two learning arcs.

## Run

1. Open this folder in VS Code.
2. Select a current Python 3 interpreter.
3. Run `main.py`.
4. Type `help` to see the deterministic commands.

The program stores notes in `notes.txt` beside the program. The file is created after a session ends.

## Test

From this folder, run:

```text
python -m unittest discover -v
```

The tests cover normal, boundary and invalid scores, note persistence, an empty note list and clean exit behavior.
