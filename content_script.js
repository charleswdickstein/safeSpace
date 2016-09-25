walk(document.body);
setTimeout(function () {
	walk(document.body);
}, 10);

function walk(node)
{
	
	var child, next;
	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}
function handleText(textNode)
{
	var v = textNode.nodeValue;

	// In the actual code is a list of about a thousand horrible curse words
	// using a variation of the below statement.
	// I do not want to post these offensive words to GitHub. 
	v = v.replace(/\bCurse\b/g, "C****");
	

	textNode.nodeValue = v;
}