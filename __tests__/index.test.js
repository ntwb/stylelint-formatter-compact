'use strict';

const formatter = require( '../' );
const stylelint = require( 'stylelint' );

const config = {
  "rules": {
    "number-leading-zero": "always",
  },
}

describe( 'success results in no errors or warnings', () => {
  let result;

  beforeEach( () => {
    result = stylelint.lint({
    code: "a { top: 0.2em; }",
      config,
      formatter,
    });
  });

  it( 'flags no errors', () => {
    return result.then( data => (
      expect( data.errored ).toBeFalsy()
    ) );
  });

  it( 'flags no warnings', () => {
    return result.then( data => (
      expect( data.results[0].warnings ).toHaveLength( 0 )
    ) );
  });
});

describe( 'success results in error with warning', () => {
  let result;

  beforeEach( () => {
    result = stylelint.lint({
      code: "a { top: .2em; }",
      config,
      formatter,
    });
  });

  it( 'flags error', () => {
    return result.then( data => (
      expect( data.errored ).toBeTruthy()
    ) );
  });

  it( 'flags warning', () => {
    return result.then( data => (
      expect( data.results[0].warnings ).toHaveLength( 1 )
    ) );
  });

  it( 'correct warning text', () => {
    return result.then( data => (
      expect( data.results[0].warnings[0].text ).toBe( 'Expected a leading zero (number-leading-zero)' )
    ) );
  });

  it( 'correct warning rule', () => {
    return result.then( data => (
      expect( data.results[0].warnings[0].rule ).toBe( 'number-leading-zero' )
    ) );
  });

  it( 'correct warning severity', () => {
    return result.then( data => (
      expect( data.results[0].warnings[0].severity ).toBe( 'error' )
    ) );
  });

  it( 'correct warning line number', () => {
    return result.then( data => (
      expect( data.results[0].warnings[0].line ).toBe( 1 )
    ) );
  });

  it( 'correct warning column number', () => {
    return result.then( data => (
      expect( data.results[0].warnings[0].column ).toBe( 10 )
    ) );
  });
});
