    $(function () {
      // Grab the template script
      var theTemplateScript = $("#address-template").html();

      // Compile the template
      var theTemplate = Handlebars.compile(theTemplateScript);

      // Define our data object
      var context = {
        "freeShow": [
          {
            "name": "Being Jim Davis",
            "cover": "bjd.jpg",
            "description": "Being Jim Davis is the world's premiere daily Garfield chrono-cast. Our mission is to discuss every strip of the comic series before dying of old age. We hope you'll join us and share in the laughter as we catalogue the adventures of everyone's favorite feline. Each episode will be a thorough examination of a single strip. We'll place it in its historical context, unravel its hidden morals and meanings, and consider if the strip stands the test of time. Above all, we promise to always provide our sincere reaction to each strip. Our one desire is to entertain you.",
            "releaseSchedule": "Daily (How do they do it?)",
            "hosts": [
              { "name": "Chris Winter" },
              { "name": "John Gibson" }
            ],
            "links": {
              "web": "beingjimdavis",
              "google": "aHR0cHM6Ly93d3cuYmVpbmdqaW1kYXZpcy5jb20vcnNz",
              "itunes": "being-jim-davis/id1148494914",
              "spotify": "5SK7dq5i8R4AuxE7e5cyJK?si=A1jsTsMYST6Qsz5b4sXU1A",
              "rss": "beingjimdavis"
            }
          },
          {
            "name": "Boku No Stop",
            "cover": "bnsf.png",
            "description": "Pitch Drop Network hosts rewatch and break down anime. There are jokes and every series is guaranteed to contain war crimes by the barrel. Current anime: Cyborg 009: The Cyborg Soldier",
            "releaseSchedule": "Every other Sunday.",
            "hosts": [
              { "name": "Chris Taylor" },
              { "name": "Fletcher Arnett" },
              { "name": "Matt Marcus" }
            ],
            "links": {
              "web": "bokunostop",
              "google": "aHR0cHM6Ly9ibnMuZmlyZXNpZGUuZm0vcnNz",
              "itunes": "boku-no-stop/id1435114604",
              "spotify": "3yL547LSeVkrZW0cTHXGHg?si=PhdaPg0vS4embKvTnHDrMw",
              "rss": "bns"
            }
          },
          {
            "name": "Lightning Strikes Thrice",
            "cover": "lst.png",
            "description": "Lightning Strikes Thrice is a JRPG games club podcast. Play along with us as we discuss the themes, mechanics, and stories of our favorite JRPGs.",
            "releaseSchedule": "Every other Sunday.",
            "hosts": [
              { "name": "Chris Taylor" },
              { "name": "Fletcher Arnett" },
              { "name": "Ryan Batie" }
            ],
            "links": {
              "web": "lightningstrikesthrice",
              "google": "aHR0cHM6Ly93d3cubGlnaHRuaW5nc3RyaWtlc3RocmljZS5jb20vcnNz",
              "itunes": "lightning-strikes-thrice/id1343184958",
              "spotify": "0KAWAFybrnwoYESvfcvvVR?si=SQ2mAcLUQ221m6C5JQoA0A",
              "rss": "lst"
            }
          },
          {
            "name": "Magmar Sucks",
            "cover": "ms.png",
            "description": "Pokemon are loved by all, unless you're Magmar - if you're Magmar, you suck. From the depths of the Pokedex, we bring you a discussion about the world's most (un)interesting Pokemon, and rank them from most to least interesting, one Pokemon at a time.",
            "releaseSchedule": "Wednesdays",
            "hosts": [
              { "name": "Chris Taylor" },
              { "name": "Mark Frazier" },
              { "name": "John Dickendasher" }
            ],
            "links": {
              "web": "magmarsucks",
              "google": "aHR0cHM6Ly9tYWdtYXJzdWNrcy5maXJlc2lkZS5mbS9yc3M",
              "itunes": "magmar-sucks/id1125767902",
              "spotify": "4IGiE9A4TyvHYOMrvSYS7N?si=c8z_mTf0QIKalieP2q0glQ",
              "rss": "magmarsucks"
            }
          }
        ]
      };

      // Pass our data to the template
      var theCompiledHtml = theTemplate(context);

      // Add the compiled html to the page
      $('.content-placeholder').html(theCompiledHtml);
    });