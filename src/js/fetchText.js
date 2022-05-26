function fetchCText() {
  const field = getCurrentField();
  const text = field.innerHTML;
  getCurrentFieldOrdinal().then((ordinal) => {
    pycmd("textToCReading:||:||:" + text + ':||:||:' +  ordinal + ':||:||:' + currentNoteId);
  })
}
try {
  fetchCText();
} catch (e) {
  alert(e);
}
