class Note:
    """One titled study note."""

    def __init__(self, title, text):
        clean_title = title.strip()
        clean_text = text.strip()
        if not clean_title or not clean_text:
            raise ValueError("A note needs a title and text")
        self.title = clean_title
        self.text = clean_text

    def __str__(self):
        return f"{self.title}: {self.text}"
