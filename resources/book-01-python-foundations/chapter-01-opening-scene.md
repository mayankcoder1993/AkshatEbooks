# Book 1: Chapter 01 Opening Scene Master Script & Comic Storyboard

**Chapter Title:** Make Python Run: Source to Bytecode to Screen  
**Setting:** Academic Block C, High-Performance Computing Lab 304, Vidyapeeth Institute of Technology  
**Time:** 08:40 AM (20 minutes before the National Campus Engineering Qualification Screening closes entry)  
**Mood:** High pressure, rapid keyboard clatter, smell of morning rain and fresh cutting chai  

---

## 🎨 Visual Storyboard & Comic Panels (Zero Baked-In Text)

*Note: All images are rendered text-free. Dialogue and terminal text are dynamically injected via CSS overlays.*

### Panel 1: The Frantic Workstation
- **Visual Description:** Wide shot of Lab 304. Fluorescent morning light cuts across rows of dual-boot workstations. In the foreground, Palash is sweating, clutching his mouse with both hands, his screen displaying a red terminal error banner. Beside him, Akshay sits hunched forward with an open terminal.
- **Dynamic Dialogue Overlay:**
  - `[1] PALASH:` "Akshay, the portal closes in 20 minutes! The AI generated this countdown script and it worked fine on my laptop, but here on Linux it throws a wall of red text!"
  - `[2] AKSHAY:` "Palash, look at your casing. On Linux, `Countdown.PY` and `countdown.py` are two different files. Why did you generate 300 lines of boilerplate for a simple epoch delta?"

### Panel 2: The Doorway Mentor
- **Visual Description:** Medium profile shot at the lab entrance. Sameer steps into the frame holding a traditional two-glass brass cutting chai holder. He wears a clean linen kurta with rolled sleeves, completely calm, watching the students with steady, experienced eyes.
- **Dynamic Dialogue Overlay:**
  - `[3] SAMEER:` "When you don't know what happens between the text on your screen and the electrical pulses in that CPU, every error looks like magic, and every fix is just guessing in the dark."
  - `[4] AKSHAY:` "Sameer Sir! He pasted a script that imports five third-party libraries we don't even have installed in the lab's base Python environment."

### Panel 3: The Three-Step Whiteboard
- **Visual Description:** Sameer sets his tea holder on the workstation desk, uncaps a marker, and sketches three clean columns on the lab whiteboard: `Source Code (.py)` → `Bytecode (.pyc)` → `CPython VM`.
- **Dynamic Dialogue Overlay:**
  - `[5] SAMEER:` "Let us strip away the noise. What is a Python program, Akshay?"
  - `[6] AKSHAY:` "An interpreted script? It reads the `.py` text line by line."
  - `[7] SAMEER:` "That is the textbook half-truth taught in rushed lectures. If Python re-parsed text on every iteration of a 10,000-loop, your machines would crawl. It compiles to bytecode first."

### Panel 4: The Bytecode Inspection Eureka
- **Visual Description:** Tight trio shot around Workstation 15. Sameer points at the terminal as Akshay runs `dis.dis(calculate_time_left)`. The glowing monitor illuminates their faces, showing opcodes scrolling cleanly. Palash watches in stunned silence.
- **Dynamic Dialogue Overlay:**
  - `[8] SAMEER:` "Look at that opcode stack. `LOAD_FAST`, `BINARY_OP`, `STORE_FAST`, `RETURN_VALUE`. No guessing. Pure deterministic machine instructions."
  - `[9] PALASH:` "It ran in 4 milliseconds... zero third-party dependencies, zero path errors."
  - `[10] SAMEER:` "That is engineering. Tomorrow, we explore why numbers and memory pointers don't work the way you think they do."

---

## 💻 Mechanical Verification Code Chunk

```python
# runtime_probe.py: Verifying CPython bytecode compilation
import dis

def calculate_time_left(total_minutes: int, elapsed_minutes: int) -> int:
    remaining = total_minutes - elapsed_minutes
    return remaining

print("=== CPYTHON BYTECODE DISASSEMBLY ===")
dis.dis(calculate_time_left)
```

**Compiled Stack Output:**
```text
=== CPYTHON BYTECODE DISASSEMBLY ===
  4           0 LOAD_FAST                0 (total_minutes)
              2 LOAD_FAST                1 (elapsed_minutes)
              4 BINARY_OP               10 (-)
              8 STORE_FAST               2 (remaining)

  5          10 LOAD_FAST                2 (remaining)
             12 RETURN_VALUE
```

---

## 🎯 Cliffhanger into Chapter 02
Sameer writes this challenge on the whiteboard before leaving:
```python
a = 300
b = 300
print(a == b)
print(a is b)
```
Output:
```text
True
False
```
Akshay and Palash stare at the screen. The stage is set for Chapter 02: Pointers and Memory.
