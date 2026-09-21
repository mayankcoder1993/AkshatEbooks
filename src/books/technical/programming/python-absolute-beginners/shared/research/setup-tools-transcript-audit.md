# Setup and Tools Transcript Audit

Status: planning only

Verified: 2026-09-21

## Owner decisions

- Main beginner environment: official Python plus Visual Studio Code.
- Placement: an unnumbered Quick Start before Lesson 1.
- Platform treatment: Windows is the main path. macOS and Linux use concise sidebars.
- Git is taught through Visual Studio Code integration rather than as a command-line-first unit.

## Source value assessment

The supplied transcripts contain useful concepts, but they must not be copied as current instructions. They combine old interfaces, course-platform logistics, product promotion and claims that have changed.

### Keep and rewrite

- A command line works inside a current directory.
- Readers need to recognize paths, folders and parent folders.
- `pwd`, `ls`, `cd`, `cd ..` and `clear` remain useful in macOS and Linux shells.
- PowerShell supports `pwd`, `ls`, `cd` and `clear` as aliases for PowerShell commands. The book should explain that these are aliases, not pretend every shell is identical.
- Windows Command Prompt uses `cd`, `dir` and `cls`. It should be a troubleshooting note, not the main Windows route.
- A `.py` file is a Python source file. The interpreter runs it.
- The interactive Python prompt, script files and notebooks are different ways to run code.
- Jupyter notebooks combine code cells, Markdown and saved output in `.ipynb` files.
- Git records local project history as commits. GitHub can host Git repositories and add collaboration features.

### Replace or reject

- Do not use video timestamps, instructor greetings, course forum directions, scheduler notices or the Pierian Data notebook-download procedure.
- Do not make Anaconda the required installation. It is a large scientific distribution, is unnecessary for early Python, has terms that may require a license in some settings, and its own documentation advises Windows users not to add Anaconda to PATH.
- Reject the transcript advice to add Anaconda to Windows PATH.
- Do not describe Anaconda as unconditionally free and open source for every use.
- Do not teach the old Windows Python installer as the only current route. Python 3.14 documentation now recommends the Python Install Manager. The traditional full installer is deprecated from Python 3.14.
- Do not recommend Atom. Its final release was in 2022 and the project was archived.
- Do not call Sublime Text free. Its license permits evaluation, but continued use requires purchase.
- Do not require Chrome for Jupyter.
- Do not claim a notebook can only be opened through the classic Jupyter launcher. Several current applications can open `.ipynb` files, including JupyterLab and Visual Studio Code with Jupyter support.
- Do not rely on exact Anaconda Navigator, Jupyter or cloud-service button locations. These interfaces change.
- Do not call GitHub a web page or imply that Git requires GitHub.
- Do not require a GitHub account for this audience. GitHub requires users to be at least 13, and the minimum can be higher in some countries. The book is written to be understandable by a 12-year-old.
- Skip lists of famous companies that use Git. They do not help the beginner complete a learning objective.

## Proposed information architecture

### Unnumbered Quick Start: Prepare your Python workshop

This section prepares the tools but does not teach Python syntax. Lesson 1 remains the reader's first program.

#### Mission A: Install the two parts

Goal: install a Python interpreter and Visual Studio Code without confusing the two.

Windows main path:

1. Install the current official Python release using the Python Install Manager from python.org or the Microsoft Store.
2. Install the Visual Studio Code user setup.
3. Install Microsoft's Python extension in Visual Studio Code.
4. Explain that VS Code is the workspace, the extension adds Python support, and the Python interpreter runs code.

macOS sidebar:

1. Install the current universal2 package from python.org.
2. Complete the certificate-install step documented by Python when applicable.
3. Install Visual Studio Code and the Python extension.
4. Use `python3` rather than assuming `python` names the intended interpreter.

Linux sidebar:

- Explain that installation commands depend on the distribution.
- Link to a maintained distribution-specific path instead of giving one command as universal.
- Verify Python 3 before installing another copy.

Success check:

- Visual Studio Code can select the intended Python interpreter.
- The integrated terminal reports a current Python 3 version.

#### Mission B: Open a safe project folder

Goal: create and open one folder dedicated to this book.

Concepts:

- File, folder, path, current working directory and parent folder.
- Why Python commands act relative to the current folder.
- Why a project folder prevents lost files.

Windows PowerShell route in the Visual Studio Code terminal:

- `pwd`: show the current location.
- `ls`: list files and folders.
- `cd folder-name`: enter a child folder.
- `cd ..`: move to the parent folder.
- `clear`: clear the visible terminal screen.

Command Prompt note:

- `cd`: show the current location.
- `dir`: list contents.
- `cd ..`: move to the parent folder.
- `cls`: clear the screen.

macOS and Linux sidebar:

- `pwd`, `ls`, `cd`, `cd ..` and `clear`.

Safety limits:

- Do not teach deletion commands in the opening setup.
- Use a disposable practice folder.
- Show quoted paths when a folder name contains spaces.
- Explain that clearing the screen does not delete files or command history.

#### Mission C: Confirm that Python is ready

Goal: verify the selected interpreter without stealing Lesson 1's first-program moment.

Steps:

1. Open the book project folder in Visual Studio Code.
2. Select the Python interpreter.
3. Open the integrated terminal.
4. Check the version with the appropriate command.
5. Learn what to do if `python` or `python3` is not found.

Do not write `print()` here. Lesson 1 remains the first code mission.

## Changes to the existing lesson sequence

- Keep Lesson 1, “Your First Program: Hello, World!”, as the first Python lesson.
- Add a short bridge in Lesson 1 from the prepared Visual Studio Code folder to `hello.py`.
- Show both the Visual Studio Code Run Python File button and the exact terminal command it runs.
- Keep the terminal route visible so the editor never appears to run Python by magic.
- Keep notebooks out of the required early sequence. They introduce a second execution model before readers need it.

## Git plan inside Visual Studio Code

Git should not be part of installation day. Add an optional project checkpoint after readers have several lesson files worth saving.

### Optional checkpoint: Save a project snapshot

Mission: preserve the current project state locally.

Teach through Visual Studio Code's Source Control view:

1. Explain that Git and GitHub are different.
2. Install Git separately. Visual Studio Code's built-in Git interface uses the machine's Git installation.
3. Initialize a local repository.
4. Review changed files in the diff view.
5. Stage selected files.
6. Write a clear commit message.
7. Create a commit and inspect the local history.

Safety and audience rules:

- Local Git does not require a GitHub account or internet connection.
- Do not require GitHub because the target reader may be 12 and GitHub accounts require a minimum age of 13, possibly older by country.
- Never commit passwords, tokens, API keys or private personal information.
- GitHub publishing, remotes, pull requests and collaboration belong in a later age-appropriate optional section or later book.

## Deferred material

Preserve for later rather than discarding:

- Jupyter Notebook and JupyterLab as optional notebook workflows.
- Cells, Markdown, kernels, saved output and execution-state cautions.
- Virtual environments with `venv` when third-party packages first become necessary.
- Anaconda or Miniconda for a later data-science path where conda adds clear value.
- Browser notebooks such as JupyterLite or Colab as optional access routes, not the primary workflow.
- GitHub remotes, branches, pull requests and collaboration.
- Downloading a repository as ZIP or cloning it, when the book first supplies a real project repository.

## Visual and assessment plan

- One visual: “Three parts of the workshop,” showing VS Code, the Python extension and the interpreter as distinct parts.
- One visual: a folder tree with a highlighted current working directory and parent folder.
- One visual: “What happens when Run is pressed,” showing VS Code saving `hello.py`, opening the selected interpreter, running the file and showing output in the terminal.
- Use real terminal examples for Windows PowerShell, with concise macOS/Linux alternatives.
- End each Quick Start mission with a visible success test and one troubleshooting branch.
- Avoid screenshots that depend on exact button positions unless they are version-labelled and paired with text instructions.

## Acceptance criteria for drafting

- A 12-year-old can distinguish the editor, extension and interpreter.
- The reader can find the current folder, list its contents, enter a child folder and return to its parent.
- The reader can verify Python without writing the first program early.
- Windows instructions work in PowerShell. Command Prompt differences are labelled.
- macOS and Linux commands are not presented as Windows Command Prompt commands.
- No Anaconda PATH advice appears.
- No obsolete Atom recommendation appears.
- No GitHub account is required.
- Every installation page states a verification date because interfaces and installers change.
- The Quick Start works in Book View, native DOCX and offline HTML.

## Authoritative sources consulted

- Python on Windows and Python Install Manager: https://docs.python.org/3/using/windows.html
- Python on macOS: https://docs.python.org/3/using/mac.html
- Python IDLE reference: https://docs.python.org/3/library/idle.html
- Visual Studio Code Python tutorial: https://code.visualstudio.com/docs/python/python-tutorial
- Visual Studio Code on Windows: https://code.visualstudio.com/docs/setup/windows
- Visual Studio Code Python environments: https://code.visualstudio.com/docs/python/environments
- Visual Studio Code source control: https://code.visualstudio.com/docs/sourcecontrol/overview
- Visual Studio Code GitHub integration: https://code.visualstudio.com/docs/sourcecontrol/github
- Microsoft Windows command reference: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands
- Microsoft `cd` reference: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd
- Microsoft PowerShell aliases: https://learn.microsoft.com/en-us/powershell/scripting/learn/shell/using-aliases
- Apple Terminal introduction: https://support.apple.com/guide/terminal/welcome/mac
- GNU `pwd` reference: https://www.gnu.org/software/coreutils/manual/html_node/pwd-invocation.html
- Project Jupyter installation: https://jupyter.org/install
- Jupyter user interfaces: https://docs.jupyter.org/en/latest/projects/user-interfaces.html
- Jupyter notebook format: https://docs.jupyter.org/en/latest/what_is_jupyter.html
- GitHub explanation of Git and GitHub: https://docs.github.com/en/get-started/start-your-journey/what-is-github
- GitHub account age requirement: https://docs.github.com/en/site-policy/github-terms/github-terms-of-service
- Anaconda installation FAQ and PATH guidance: https://www.anaconda.com/docs/getting-started/working-with-conda/reference/faq
- Atom final release notice: https://atom-editor.cc/releases
