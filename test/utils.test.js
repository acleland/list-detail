// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDino, renderDinoDetail } from '../utils.js';

const test = QUnit.test;

test('test renderDino', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="./dinosaurs/?id=2"><div class="dinosaur"><img src="./assets/dinosaurs/apatosaurus.png"><h5>Apatosaurus</h5></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDino({
        id: '2',
        name: 'Apatosaurus',
        period: 'Jurassic',
        suborder: 'Sauropoda',
        length: 70,
        image: 'apatosaurus.png'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test renderDinoDetail', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="dino-detail"><h1>Ankylosaurus</h1><img src="../assets/dinosaurs/ankylosaurus.png"><ul><li>Time period: Cretaceous</li><li>Suborder: Thyreophora</li><li>Length: 23 ft</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDinoDetail({
        id: '4',
        name: 'Ankylosaurus',
        period: 'Cretaceous',
        suborder: 'Thyreophora',
        length: 23,
        image: 'ankylosaurus.png'
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});