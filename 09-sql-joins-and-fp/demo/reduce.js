const people = [
  { id: 20, name: 'sam samuels', born: 1963, graduated: 2001 },
  { id: 30, name: 'brian nations', born: 1966, graduated: 2002 },
  { id: 3, name: 'eric wiseman', born: 1970, graduated: 2003 },
  { id: 4, name: 'sally johnson', born: 1974, graduated: 2005 },
  { id: 5, name: 'tim turtle', born: 1982, graduated: 2008 },
  { id: 6, name: 'tina jackson', born: 1984, graduated: 2009 },
  { id: 7, name: 'susan short', born: 1987, graduated: 2001 },
  { id: 8, name: 'bob builder', born: 1996, graduated: 2013 },
  { id: 9, name: 'paul wall', born: 2005, graduated: 2006 },
  { id: 10, name: 'wilson weasel', born: 2005, graduated: 2010 },
  { id: 11, name: 'matt doe', born: 2010, graduated: 2013 },
  { id: 12, name: 'peter pan', born: 2013, graduated: 2013 }
];

let newArr = people.reduce((acc, curr) => {
  if (curr.id > 10) {
    acc.push({
      id: curr.id,
      name: curr.name.split(' '),
      diffBornAndGrad: curr.graduated - curr.born
    })
  }
  return acc
}, [])

console.log(newArr);