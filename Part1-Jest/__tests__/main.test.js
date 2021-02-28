const func = require('../assets/scripts/main');

describe("icon level", () => {
    test('> 66', () => {
        func(88);
        expect(iconLevel).toBe("3");
    });
    
    test('> 33', () => {
        func(55);
        expect(iconLevel).toBe("2");
    });
    
    test('> 0', () => {
        func(10);
        expect(iconLevel).toBe("1");
    });
    
    test('Branch 4: Else', () => {
        func(0);
        expect(iconLevel).toBe("0");
    });
    
    test('Branch 4: Else', () => {
        func(-3);
        expect(iconLevel).toBe("0");
    });
    
});


describe("return", () => {
    test('> 66', () => {
        
        expect(func(88)).toMatch("./assets/media/icons/volume-level-3.svg");
    });
    
    test('> 33', () => {

        expect(func(55)).toMatch("./assets/media/icons/volume-level-2.svg");
    });
    
    test('> 0', () => {
        func(10);
        expect(func(10)).toMatch("./assets/media/icons/volume-level-1.svg");
    });
    
    test('Branch 4: Else', () => {
        expect(func(0)).toMatch("./assets/media/icons/volume-level-0.svg");
    });
    
    test('Branch 4: Else', () => {
        expect(func(-3)).toMatch("./assets/media/icons/volume-level-0.svg");
    });
    
});

