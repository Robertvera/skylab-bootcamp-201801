function hangmanResultsWellDoneWhenAssertingWordOnThe7thAttempt() {
    var game = new Hangman('hello', 10);

    expect(game.try('a')).toBe('9 _ _ _ _ _');
    expect(game.try('b')).toBe('8 _ _ _ _ _');
    expect(game.try('c')).toBe('7 _ _ _ _ _');
    expect(game.try('d')).toBe('6 _ _ _ _ _');
    expect(game.try('e')).toBe('6 _ E _ _ _');
    expect(game.try('l')).toBe('6 _ E L L _');
    expect(game.try('hello')).toBe('You have guessed the word, well done!');
}

