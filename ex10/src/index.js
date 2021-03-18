function myFunction() {
    var myMusic = {
      001: {
        artist: "Billy Joel",
        title: "Piano Man",
        relase_year: 1973,
        formats: {
          1: "CD",
          2: "8T",
          3: "LP"
        },
        gold: true
      },
      002: {
          artist: "Bob Marley",
          title: "One Love",
          relase_year: 1965,
          formats: {
              1: "CD",
              2: "Vinyl",
              3: "Disk"
          },
      },
    };
    return myMusic;
}
myFunction()[2];

module.exports = myFunction;