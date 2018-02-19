describe('Shuffle', function () {
    var game;
    var a = [1,2,4,4,65,2,23,34];
    beforeEach(function() {
        game = a.shuffle();   
    });

    function shuffleResultComparedWithOriginalArrayMustBeDifferentSorted () {
        expect(game).not.toBe(a);
    }
    
    it(shuffleResultComparedWithOriginalArrayMustBeDifferentSorted.name,shuffleResultComparedWithOriginalArrayMustBeDifferentSorted);    

    function shuffleResultComparedWithOriginalArrayMustBeDifferentSortedButWithSameElements() {        
        expect(game).toContain(a[0]);
        expect(game).toContain(a[1]);
        expect(game).toContain(a[2]);
        expect(game).toContain(a[3]);
        expect(game).toContain(a[4]);
        expect(game).toContain(a[5]);
        expect(game).toContain(a[6]);
        expect(game).toContain(a[7]);        
    }

    it(shuffleResultComparedWithOriginalArrayMustBeDifferentSortedButWithSameElements.name,shuffleResultComparedWithOriginalArrayMustBeDifferentSortedButWithSameElements);    
});