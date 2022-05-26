function insertHTML(newHTML) {
  const sel = getFieldSelection();
  const field = getCurrentField();
  selectAllFieldNodes(field, sel);
  setFormat("inserthtml", newHTML.trim());

}
try {

  insertHTML("%s");
} catch (e) {
  alert(e);
}
