export const QUICK_START = {
  title: 'Quick Start: Run Your First Saved File',
  subtitle: 'Set up official Python and VS Code, then prove that your project can run.',
  blocks: [
    { type: 'heading', text: 'Windows: install the two tools' },
    { type: 'steps', showHeading: false, items: ['Open **python.org/downloads**. Download the current supported Python 3 installer for Windows.', 'Run the installer. Select **Add python.exe to PATH** if the installer offers it. Then choose **Install Now**.', 'Open **code.visualstudio.com**. Download and install Visual Studio Code.', 'In VS Code, open Extensions. Install **Python** by Microsoft.'] },
    { type: 'source-note', label: 'Official setup sources', claim: 'Use the official downloads. Screen labels can change as the tools improve.', url: 'https://docs.python.org/3/using/windows.html', verifiedThrough: '2026-09-21' },
    { type: 'heading', text: 'Create and run a saved project' },
    { type: 'steps', showHeading: false, items: ['Create a folder named `study-assistant` in Documents.', 'In VS Code, choose **File > Open Folder** and open that folder.', 'Create a file named `hello.py`. Type `print("Setup works!")`. Save the file.', 'Open the Command Palette. Choose **Python: Select Interpreter**. Pick the Python 3 installation you just made.', 'Select the Run Python File button. VS Code opens a terminal and shows `Setup works!`.'] },
    { type: 'callout', variant: 'note', title: 'Know the four places', paragraphs: ['The **Explorer** lists files. The **editor** is where you type. The `.py` file stores your source code. The **terminal** shows the command and program output.', 'Your project is the folder you created. Reopen that folder later to find your work.'] },
    { type: 'terminal', command: 'python hello.py', lines: ['Setup works!'] },
    { type: 'heading', text: 'macOS and Linux sidebars' },
    { type: 'callout', variant: 'note', title: 'macOS', paragraphs: ['Install a current Python 3 from python.org. Install VS Code and the Microsoft Python extension. Select that Python 3 interpreter. The run steps are then the same.'] },
    { type: 'callout', variant: 'note', title: 'Linux', paragraphs: ['Python 3 is often installed already. Check your distribution documentation before changing system Python. Install VS Code and the Microsoft Python extension. Select the available Python 3 interpreter.'] },
    { type: 'heading', text: 'Save a first version with VS Code' },
    { type: 'paragraph', text: '**Git** records versions of files. In VS Code, open Source Control. Choose **Initialize Repository**. Stage `hello.py`, write `First working file`, and choose **Commit**. You do not need command-line Git for this Quick Start.' },
    { type: 'quiz', items: [['Which file stores your first program?', '`hello.py` inside the project folder.'], ['Where does the output appear?', 'In the terminal opened by VS Code.'], ['What must you select if VS Code cannot find Python?', 'A Python 3 interpreter.']] },
    { type: 'takeaways', items: ['You can reopen the project folder.', 'You can run a saved `.py` file.', 'You can find the output in the terminal.'] }
  ]
}
