import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let completionProvider = vscode.languages.registerCompletionItemProvider(
		['erb'],
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				// Define the list of attributes to provide completions for
				let attributes = [
					'id=',
					'class=',
					'name=',
					'title=',
					'style=',
					'alt=',
					'href=',
					'src=',
					'dir=',
					'lang=',
					'tabindex='
				];

				// Create completion items for each attribute
				let completionItems = attributes.map(attribute => {
					let completionItem = new vscode.CompletionItem(attribute);
					completionItem.kind = vscode.CompletionItemKind.Property;
					completionItem.insertText = new vscode.SnippetString(`${attribute}"$1"`);
					return completionItem;
				});

				return completionItems;
			}
		},
		' '
	);

	context.subscriptions.push(completionProvider);
}

export function deactivate() { }
