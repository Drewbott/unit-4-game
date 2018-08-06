// <!-- JAVASCRIPT  -->
//   <!-- ========================================= -->


  var targetNumber = 0;
  var counter = 0;
  var numberOptions = [];
  var wins = [];
  var losses = [];
  // Now for the hard part. Creating multiple crystals each with their own unique number value.


  // We begin by expanding our array to include four options.
  function updatewins (){
    $("#wins").text(wins);
  };

  function updatelosses(){
    $("#losses").text(losses);
  }

//   function restartGame(){
// updatelosses()
// updatewins()
//   }
  
  function initializeGame(){
    $('#crystals').empty();
    targetNumber = Math.floor(Math.random() * 102) +19;
    $("#number-to-guess").text(targetNumber);
  
    for (var i = 0; i < 4; i++) {
      numberOptions.push(Math.floor(Math.random() * 20) + 2)
    }

  // Next we create a for loop to create crystals for every numberOption.

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    var imageCrystal2 = $("<img>");
    var imageCrystal3 = $("<img>");
    var imageCrystal4 = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    imageCrystal2.addClass("crystal-image");
    imageCrystal3.addClass("crystal-image");
    imageCrystal4.addClass("crystal-image");


    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeXre2yPD6v9_Dl1Y-quakZAk6LSQXDgLcu5mgMBzd2Ufk6OJ");
    imageCrystal2.attr("src", "https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/c8/07/cc/c807cc56-694c-d0ee-a55f-14884b408493/BjbGeneric-1x_U007emarketing-0-85-220-0-8.png/246x0w.jpg");
    imageCrystal3.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rZtSjOaTam-q_yMWxsbmNCEPNSPElnb20Wy0QOTYd38jrT76Dg");
    imageCrystal4.attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmdksmGJzuCb6OqFmU_OovBOS1k4GrfNnGkzDpRRsnrTs_0rE");
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[0]);
    imageCrystal2.attr("data-crystalvalue", numberOptions[1]);
    imageCrystal3.attr("data-crystalvalue", numberOptions[2]);
    imageCrystal4.attr("data-crystalvalue", numberOptions[3]);


    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    $("#crystals").append(imageCrystal2);
    $("#crystals").append(imageCrystal3);
    $("#crystals").append(imageCrystal4);

  }
  // This time, our click event applies to every single crystal on the page. Not just one.
  $(document).on("click", ".crystal-image", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + counter);
   $("#current-score").text(counter);

    if (counter == targetNumber) {
      alert("You win!");
      wins++;
      updatewins ()
      initializeGame();
    }

    else if (counter > targetNumber) {
      alert("You lose!!");
      losses++;
      updatelosses()
      initializeGame();
    }


  });

  initializeGame();

 