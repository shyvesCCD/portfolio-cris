export function mdBoldToStrong(text: string) {
    if (text == null) {
        return null;
    } else {
        const surrounding = new RegExp(/\*{2}([^*]+)\*{2}/g);
        const newText = text.replace(surrounding, "<strong>$1</strong>");

        return newText.replaceAll("\n", "<br>");
    }
}
