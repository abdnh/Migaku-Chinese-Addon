function insertHTMLToField(newHTML, ordinal) {
  const sel = getFieldSelection();
  getFieldByOrdinal(ordinal).then((field) => {
    selectAllFieldNodes(field, sel);
    selectText(field, sel);
    setFormat("inserthtml", newHTML.trim());
  });
}
try {

  insertHTMLToField("%s", "%s");
} catch (e) {
  alert(e);
}
