const rareBeautyCategories = [
    {
      id: 1,
      category: "face",
      products: [
        {
          name: "Soft Pinch Liquid Blush",
          video: "/products/blushVideo.mp4",
          detailsText1:
            "A viral bestseller for a reason. This weightless liquid blush delivers high-impact color with just one dot, blending seamlessly for a pinch-perfect flush that lasts up to 12 hours.",
          detailsText2: `Airy and lightweight, this liquid formula blends and builds effortlessly—whether you want a soft, natural flush or a bold pop of color.
  
  Featuring pure color pigments mixed in a weightless, transparent base for true color payoff that flatters all skin tones.
  
  Long-lasting and ultra-pigmented, just one dot gives high-impact color that stays put all day. A little goes a long way!
  
  Mistake-proof and seamless, it layers beautifully over liquid or powder formulas without disturbing makeup.
  
  Available in matte and dewy finishes, this silky formula is infused with a botanical blend of skin-loving ingredients to calm and nourish skin.
  
  Available in 13 shades.
  Bliss – nude pink (matte)
  Love – terracotta (matte)
  Grace – bright rose mauve (matte)
  Faith – deep berry (matte)
  Joy – muted peach (dewy)
  Happy – cool pink (dewy)
  Lucky – hot pink (dewy)
  Grateful – true red (dewy)
  Hope – nude mauve (dewy)
  Encourage – soft neutral pink (dewy)
  Believe – true mauve (dewy)
  Worth – true rose (dewy)
  Virtue – beige peach (dewy)
  
  Real results:
  • 100% said it applies easily and wears evenly
  • 100% said the texture is silky and glides on smoothly
  • 100% said it stays in place upon application and is comfortable to wear
  • 97% said the color blends seamlessly`,
          people: "/products/detailsPeopleBlush.webp",
          price: 25,
          bestSellers: true,
          detailsImage: "/products/detailsBlushImage.webp",
          selenaLoves:
            "“There’s nothing like a soft hint of blush to add dimension and color to your look.”",
          shades: [
            {
              name: "Grateful",
              shadeImage: "/products/blushShade1.avif",
              bestSellers: true,
              productImages: [
                "/products/grateImage1.webp",
                "/products/grateImage2.webp",
                "/products/grateImage3.webp",
              ],
            },
            {
              name: "Happy",
              shadeImage: "/products/blushShade2.avif",
              bestSellers: false,
              productImages: [
                "/products/happyImage1.webp",
                "/products/happyImage2.webp",
                "/products/happyImage3.webp",
              ],
            },
            {
              name: "Joy",
              shadeImage: "/products/blushShade3.avif",
              bestSellers: true,
              productImages: [
                "/products/joyImage1.webp",
                "/products/joyImage2.webp",
                "/products/joyImage3.webp",
              ],
            },
            {
              name: "Lucky",
              shadeImage: "/products/blushShade4.avif",
              bestSellers: false,
              productImages: [
                "/products/luckyImage1.webp",
                "/products/luckyImage2.webp",
                "/products/luckyImage3.webp",
              ],
            },
            {
              name: "Bliss",
              shadeImage: "/products/blushShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/blissImage1.webp",
                "/products/blissImage2.webp",
                "/products/blissImage3.webp",
              ],
            },
          ],
        },
        {
          name: "Soft Pinch Matte Bouncy Blush",
          video: "",
          detailsText1:
            "A cushiony cream-to-powder blush that gives the dreamiest flush of color with a lasting, blurred matte finish. ",
          detailsText2:
                `Bouncy, buildable putty blends like cream, blurs like powder. You have to feel it to believe it.

                Gives cheeks an airy, cloud-like flush that looks like a dream, with the most weightless, natural matte finish that won’t settle into creases, emphasize skin texture, or dry you out.

                Easy to apply and layer. Wear it bright and bold or blended for a softer effect.

                Water-, sweat-, and humidity-resistant for serious staying power that won’t transfer or smudge.

                Enriched with cacao seed and a nourishing blend of pomegranate, papaya seed, and rose hip oils to keep skin hydrated.

                Choose from 7 shades:
                Hope – nude mauve
                Happy – cool pink
                Worth – true rose
                Grateful – soft red
                Alive – bright coral orange
                Thriving – bright raspberry
                Truth – soft plum

                Real Results:
                + 100% said it blends seamlessly & doesn’t drag upon application
                + 100% said it instantly blurs skin
                + 100% said it doesn’t settle into creases or emphasize skin texture
                + 100% said it layers well over makeup
                + 100% said it’s sweat- & humidity-resistant`,
          people: "/products/detailsPeopleMatte.webp",
          price: 27,
          detailsImage: "/products/detailsMatteImage.webp",
          selenaLoves: "“There’s nothing like a soft hint of matte blush to add dimension and color to your look.”",
          shades: [
            {
              name: "Hope",
              shadeImage: "/products/matteShade1.avif",
              bestSellers: false,
              productImages: [
                "/products/matteHope1.webp",
                "/products/matteHope2.webp",
                "/products/matteHope3.webp",
                "/products/matteHope4.webp",
              ],
            },
            {
              name: "Happy",
              shadeImage: "/products/matteShade2.avif",
              bestSellers: true,
              productImages: [
                "/products/matteHappy1.webp",
                "/products/matteHappy2.webp",
                "/products/matteHappy3.webp",
                "/products/matteHappy4.webp",
              ],
            },
            {
              name: "Worth",
              shadeImage: "/products/matteShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/matteWorth1.webp",
                "/products/matteWorth2.webp",
                "/products/matteWorth3.webp",
                "/products/matteWorth4.webp",
              ],
            },
            {
              name: "Alive",
              shadeImage: "/products/matteShade4.avif",
              bestSellers: false,
              productImages: [
                "/products/matteAlive1.webp",
                "/products/matteAlive2.webp",
                "/products/matteAlive3.webp",
                "/products/matteAlive4.webp",
              ],
            },
            {
              name: "Grateful",
              shadeImage: "/products/matteShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/matteGrate1.webp",
                "/products/matteGrate2.webp",
                "/products/matteGrate3.webp",
                "/products/matteGrate4.webp",
                "/products/matteGrate5.webp",
              ],
            },
          ],
        },
        {
          name: "Soft Pinch Liquid Contour",
          video: "",
          detailsText1:
            "A weightless, easy-to-blend liquid contour that defines and enhances your fave features for a naturally lifted look that lasts. Just dot, blend, and you’re done.",
          detailsText2:
            `Soft Pinch Liquid Blush, but make it contour. We took the same airy, blendable goodness that you love so much and put it into an easy-to-use liquid contour.

                Instantly enhance, add dimension, and play up your fave features with the look of real shadows. The result? A naturally sculpted look that’s never muddy, cakey, patchy, or greasy.

                The buildable, streak-free formula blends evenly and seamlessly, layering beautifully under and over makeup.

                Packed with long-lasting pigments for all-day wear that won’t fade—one dot really goes a long way.

                Choose from 7 shadow-like shades created for a range of skin tones:
                Gentle – fair (cool taupe)
                Mellow – light (cool brown)
                Solace – medium (cool taupe)
                Serene – medium (brown)
                Tranquil – medium deep (cool brown)
                Peaceful – deep (neutral brown)
                Sublime – deep (cool brown)

                Real Results:
                + 100% said it doesn’t disturb makeup underneath
                + 98% said it layers well under & over makeup
                + 98% said it glides on smoothly & the applicator makes it easy to apply
                + 96% said the formula is pigmented—a little goes a long way
                + 96% said it never looks cakey
`,
          people: "/products/detailsPeopleContour.webp",
          price: 30,
          detailsImage: "/people/detailsContourImage.webp",
          selenaLoves: "“There’s nothing like a soft hint of contour to add dimension and color to your look.”",
          shades: [
            {
              name: "Gentle",
              shadeImage: "/products/contourShade1.avif",
              bestSellers: false,
              productImages: [
                "/products/contourGentle1.webp",
                "/products/contourGentle2.webp",
                "/products/contourGentle3.webp",
                "/products/contourGentle4.webp",
              ],
            },
            {
              name: "Mellow",
              shadeImage: "/products/contourShade2.avif",
              bestSellers: false,
              productImages: [
                "/products/contourMellow1.webp",
                "/products/contourMellow2.webp",
                "/products/contourMellow3.webp",
                "/products/contourMellow4.webp",
              ],
            },
            {
              name: "Solace",
              shadeImage: "/products/contourShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/contourSolace1.webp",
                "/products/contourSolace2.webp",
                "/products/contourSolace3.webp",
                "/products/contourSolace4.webp",
              ],
            },
            {
              name: "Serene",
              shadeImage: "/products/contourShade4.avif",
              bestSellers: false,
              productImages: [
                "/products/contourSerene1.webp",
                "/products/contourSerene2.webp",
                "/products/contourSerene3.webp",
                "/products/contourSerene4.webp",
              ],
            },
            {
              name: "Tranquil",
              shadeImage: "/products/contourShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/contourTran1.webp",
                "/products/contourTran2.webp",
                "/products/contourTran3.webp",
                "/products/contourTran4.webp",
              ],
            },
          ],
        },
        {
          name: "Positive Light Liquid Luminizer",
          video: "/products/luminizerVideo.mp4",
          detailsText1:
            "Good news—our fan-fave liquid highlighter fam is growing, with two NEW shades: Exhilarate (champagne gold) and Reveal (copper).  Create an instantly dewy, buildable glow while nourishing skin so it looks on the bright side all day.",
          detailsText2:
            `
            Silky, second-skin formula blends evenly for an instant wash of light that looks good on all skin tones

            Superfine, light-catching pearls make it easy to take your glow from soft sheen to pure pop in seconds

            Lasts all day without fading, creasing, or settling into fine lines

            Layers well over makeup—liquids, powders, creams—without disturbing what's already there

            Choose from 10 glowing shades:
            Enlighten – cool champagne
            Enchant - soft pink
            Mesmerize - rose bronze
            Outshine - true gold
            Transcend - rose gold
            Flaunt – true gold
            Captivate - copper
            Reflect - deep bronze
            Exhilarate – champagne gold (NEW)
            Reveal - warm copper (NEW)
            `,
          people: "/products/detailsPeopleLuminizer.webp",
          price: 28,
          detailsImage: "/products/detailsLuminizerImage.webp",
          selenaLoves: "It layers well with all formulas – liquid, powder, or cream. It's so versatile!",
          shades: [
            {
              name: "Exhilarate",
              shadeImage: "/products/luminizerShade1.avif",
              bestSellers: true,
              productImages: [
                "/products/luminizerEx1.webp",
                "/products/luminizerEx2.webp",
                "/products/luminizerEx3.webp",
                "/products/luminizerEx4.webp",
              ],
            },
            {
              name: "Reveal",
              shadeImage: "/products/luminizerShade2.avif",
              bestSellers: false,
              productImages: [
                "/products/luminizerReveal1.webp",
                "/products/luminizerReveal2.webp",
                "/products/luminizerReveal3.webp",
                "/products/luminizerReveal4.webp",
              ],
            },
            {
              name: "Captivate",
              shadeImage: "/products/luminizerShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/luminizerCap1.webp",
                "/products/luminizerCap2.webp",
                "/products/luminizerCap3.webp",
                "/products/luminizerCap4.webp",
              ],
            },
            {
              name: "Enchant",
              shadeImage: "/products/luminizerShade4.avif",
              bestSellers: false,
              productImages: [
                "/products/luminizerEnch1.webp",
                "/products/luminizerEnch2.webp",
                "/products/luminizerEnch3.webp",
                "/products/luminizerEnch4.webp",
              ],
            },
            {
              name: "Enlighten",
              shadeImage: "/products/luminizerShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/luminizerEnlig1.webp",
                "/products/luminizerEnlig2.webp",
                "/products/luminizerEnlig3.webp",
                "/products/luminizerEnlig4.webp",
              ],
            },
          ],
        },
        {
          name: "Liquid Touch Brightening Concealer",
          video: "",
          detailsText1:
            "A lightweight, hydrating concealer that gives you buildable coverage where you need it while brightening skin with a radiant finish.",
          detailsText2:
            `
            Instantly hides what you want to hide - blemishes, dark circles, redness, fine lines- with medium buildable coverage and a radiant, skin-like finish.

            Creamy and hydrating, yet super long-lasting. Sweat-resistant, too.

            Blends like a dream to even out skin texture.

            Won't cake or settle into fine lines.

            Real results:
            • 94% said it doesn’t look ashy, chalky, or flat
            • 92% said it glides on evenly
            • 92% said it gives skin a natural radiant finish
            • 92% said it doesn’t look cakey
            • 90% said it smooths out skin texture and wears evenly

            `,
          people: "/products/detailsPeopleConcealer.webp",
          price: 26,
          detailsImage: "/products/detailsConcealerImage.webp",
          selenaLoves: "“It's a quick and easy way to brighten dark areas or hide blemishes.”",
          shades: [
            {
              name: "100W",
              shadeImage: "/products/concealerShade1.avif",
              bestSellers: false,
              productImages: [
                "/products/concealer100W1.webp",
                "/products/concealer100W2.webp",
                "/products/concealer100W3.webp",
                "/products/concealer100W4.webp",
              ],
            },
            {
              name: "110N",
              shadeImage: "/products/concealerShade2.avif",
              bestSellers: false,
              productImages: [
                "/products/concealer110N1.webp",
                "/products/concealer110N2.webp",
                "/products/concealer110N3.webp",
                "/products/concealer110N4.webp",
              ],
            },
            {
              name: "120C",
              shadeImage: "/products/concealerShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/concealer120C1.webp",
                "/products/concealer120C2.webp",
                "/products/concealer120C3.webp",
                "/products/concealer120C4.webp",
              ],
            },
            {
              name: "130N",
              shadeImage:"/products/concealerShade4.avif",
              bestSellers: false,
              productImages: [
                "/products/concealer130N1.webp",
                "/products/concealer130N2.webp",
                "/products/concealer130N3.webp",
                "/products/concealer130N4.webp",
              ],
            },
            {
              name: "140C",
              shadeImage: "/products/concealerShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/concealer140C1.webp",
                "/products/concealer140C2.webp",
                "/products/concealer140C3.webp",
                "/products/concealer140C4.webp",
              ],
            },
          ],
        },
        {
          name: "Soft Pinch Luminous Powder Blush",
          video: "",
          detailsText1:
            "A radiant blush that lights up all skin tones with airy, seamless, and silky color to keep you beaming all day.",
          detailsText2:
            `
            An easy-to-use hybrid of two award-winning bestsellers: Soft Pinch Liquid Blush and Positive Light Silky Touch Highlighter.

            Unexpectedly smooth and incredibly weightless, this airy blush goes on seamlessly for a pinch-perfect flush that seems to radiate from within.

            Highly pigmented base is packed with brilliant pearls for natural-looking dimension. No flaking, caking, or fall out.

            Easy to blend, build color, or diffuse for a softer effect—without ever looking chalky or ashy.

            Transfer-proof, smudge-proof, water-resistant formula keeps you blushing all day.

            Hand-polished, so each powder is as unique as you are.

            Available in 6 shades:
            Cheer – light warm pink
            Hope – nude mauve
            Happy – cool pink
            Joy – muted peach
            Truth – mauve maroon
            Love – terracotta

            Net Wt. 0.098 oz. | 2.8 g

            Real results:
            • 99% said it instantly lights up skin with a radiant flush
            • 99% said it applies evenly
            • 97% said its highly pigmented color blends seamlessly
            • 96% said it’s light and airy and doesn't dry out skin
            • 95% said it doesn't cake upon application and doesn't look chalky or ashy
            `,
          people: "/products/detailsPeoplePowder.webp",
          price: 27,
          detailsImage: "/products/detailsPowderImage.webp",
          selenaLoves: "“This blush combines Soft Pinch’s weightless color and Positive Light's glassy sheen—the best of both worlds in a single step!”",
          shades: [
            {
              name: "Cheer",
              shadeImage: "/products/powderShade1.avif",
              bestSellers: true,
              productImages: [
                "/products/powderCheer1.webp",
                "/products/powderCheer2.webp",
                "/products/powderCheer3.webp",
                "/products/powderCheer4.webp",
              ],
            },
            {
              name: "Hope",
              shadeImage: "/products/powderShade2.avif",
              bestSellers: true,
              productImages: [
                "/products/powderHope1.webp",
                "/products/powderHope2.webp",
                "/products/powderHope3.webp",
                "/products/powderHope4.webp",
              ],
            },
            {
              name: "Happy",
              shadeImage: "/products/powderShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/powderHappy1.webp",
                "/products/powderHappy2.webp",
                "/products/powderHappy3.webp",
                "/products/powderHappy4.webp",
              ],
            },
            {
              name: "Joy",
              shadeImage: "/products/powderShade4.avif",
              bestSellers: false,
              productImages: [
                "/products/powderJoy1.webp",
                "/products/powderJoy2.webp",
                "/products/powderJoy3.webp",
                "/products/powderJoy4.webp",
              ],
            },
            {
              name: "Truth",
              shadeImage: "/products/powderShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/powderTruth1.webp",
                "/products/powderTruth2.webp",
                "/products/powderTruth3.webp",
                "/products/powderTruth4.webp",
              ],
            },
          ],
        },
        {
          name: "Liquid Touch Weightless Foundation",
          video: "",
          detailsText1:
            "An innovative long-lasting foundation that combines the weightless feel of a serum with buildable medium coverage for truly breathable, layerable wear.",
          detailsText2:
            `
            Weightless, smooth-glide formula dries to a natural, skin-like finish in 48 shades.

            Pure pigments are packed in a super fluid, serum-like base, making it easier than ever to blend and build your coverage just how you like it—a little really goes a long way.

            Evens out skin tone and smooths the look of pores. No clogging or caking.

            Lasts all day without drying you out or changing color on you.

            Convenient, mess-free doe-foot applicator lets you apply 1 dot at a time—all you need to cover your entire face!


            `,
          people: "/products/detailsPeopleFoundation.webp",
          price: 35,
          detailsImage: "/products/detailsFoundationImage.webp",
          selenaLoves: "“It just melts onto your skin, so you forget you're wearing anything. ”",
          shades: [
            {
              name: "100W",
              shadeImage: "/products/foundationShade1.avif",
              bestSellers: false,
              productImages: [
                "/products/foundation100W1.webp",
                "/products/foundation100W2.webp",
                "/products/foundation100W3.webp",
                "/products/foundation100W4.webp",
              ],
            },
            {
              name: "110N",
              shadeImage: "/products/foundationShade2.avif",
              bestSellers: false,
              productImages: [
                "/products/foundation110N1.webp",
                "/products/foundation110N2.webp",
                "/products/foundation110N3.webp",
                "/products/foundation110N4.webp",
              ],
            },
            {
              name: "120C",
              shadeImage: "/products/foundationShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/foundation120C1.webp",
                "/products/foundation120C2.webp",
                "/products/foundation120C3.webp",
                "/products/foundation120C4.webp",
              ],
            },
            {
              name: "130N",
              shadeImage: "/products/foundationShade4.avif",
              bestSellers: false,
              productImages: [
                "/products/foundation130N1.webp",
                "/products/foundation130N2.webp",
                "/products/foundation130N3.webp",
                "/products/foundation130N4.webp",
              ],
            },
            {
              name: "140C",
              shadeImage: "/products/foundationShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/foundation140C1.webp",
                "/products/foundation140C2.webp",
                "/products/foundation140C3.webp",
                "/products/foundation140C4.webp",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      category: "fragrance",
      products: [
        {
          name: "Rare Eau de Parfum",
          video: "",
          detailsText1:
            "Warm and decadent with a touch of spice, Rare Eau de Parfum welcomes you with notes of creamy caramel and pistachio, gives way to an unexpected duality of rich vanilla and spicy ginger, then dries down to an earthy sandalwood. Bright yet deep, familiar yet unexpected, this is a fragrance that evolves with every passing moment, lingering for up to 12 hours.",
          detailsText2:
            `
            THE SCENT
            Warm, evocative, and unexpected. Rich vanilla meets a hint of spicy ginger for a scent that’s both bright and sensual—never too sweet, always sophisticated. As it lingers, the sandalwood and skin musks reveal new layers over time, making every moment feel rare and unforgettable.

            FRAGRANCE FAMILY: Warm & spicy

            THE NOTES
            TOP: Caramel, Pistachio, Pink Pepper
            HEART: Vanilla, Ginger, Cocoa Beans
            DRY: Sandalwood, Tonka Beans, Skin Musks

            THE CRAFTSMANSHIP
            NATURE’S FINEST, SOURCED GLOBALLY
            Crafted in France with ingredients from around the world, each adding its own unique depth and character. Spicy pink pepper from Australia, vibrant ginger from Nigeria, and rich, upcycled cocoa beans from West Africa come together with smooth sandalwood from New Caledonia and warm tonka beans from Venezuela. Like Selena, who finds inspiration everywhere, this fragrance is a celebration of discovery—unexpected and undeniably rare.

            THE BOTTLE
            THOUGHTFULLY DESIGNED WITH ACCESSIBILITY IN MIND
            Traditional perfumes, with standard pumps and decorative caps, can be challenging for someone with dexterity issues. We partnered with a group of certified hand therapists and a team of packaging engineers to create a luxe, ergonomic fragrance bottle that ensures the most effortless and comfortable dispensing.

            REAL RESULTS
            + 96% say the oversized pump makes it easier to press down on with any part of your hand/body
            + 95% say the shape of the bottle allows for a more secure grip
            + 90% say the size of the pump makes it easier to twist and unlock/lock the cap
            + 90% say the size and shape of the pump allow you to spray fragrance more easily

            *In a consumer study of 56 individuals with mild to severe upper extremity impairments

            THE EXPERIENCE
            MADE TO BE CUSTOMIZED
            Wear it solo or pair it with our Fragrance Layering Balms for a scent that’s customized to your mood, your moment.
            `,
          people: "/products/detailsPeopleParfum.webp",
          price: 55,
          detailsImage: "/products/detailsParfumImage.webp",
          selenaLoves: "“My days are never the same, so I wanted a fragrance that evolves for the moment. Something that could take me from a quiet morning at home to a big night out—and always feels just right.”",
          shades: [
            {
              name: "No. 50 mL",
              shadeImage: "50 mL",
              bestSellers: true,
              productImages: [
                "/products/parfum1.webp",
                "/products/parfum2.jpg",
                "/products/parfum3.webp",
                "/products/parfum4.webp",
              ],
            },
          ],
        },
        {
          name: "Rare Eau de Parfum Travel Spray",
          video: "",
          detailsText1:
            "A travel-ready version of our warm and decadent fragrance with a touch of spice. Notes of creamy caramel and pistachio give way to an unexpected duality of rich vanilla and spicy ginger, then dries down to an earthy sandalwood. Bright yet deep, familiar yet unexpected, this is a fragrance that evolves with every passing moment, lingering for up to 12 hours.",
          detailsText2:
            `
            THE SCENT
            Warm, evocative, and unexpected. Rich vanilla meets a hint of spicy ginger for a scent that’s both bright and sensual—never too sweet, always sophisticated. As it lingers, the sandalwood and skin musks reveal new layers over time, making every moment feel rare and unforgettable.

            FRAGRANCE FAMILY: Warm & spicy

            THE NOTES
            TOP: Caramel, Pistachio, Pink Pepper
            HEART: Vanilla, Ginger, Cocoa Beans
            DRY: Sandalwood, Tonka Beans, Skin Musks

            THE CRAFTSMANSHIP
            NATURE’S FINEST, SOURCED GLOBALLY
            Crafted in France with ingredients from around the world, each adding its own unique depth and character. Spicy pink pepper from Australia, vibrant ginger from Nigeria, and rich, upcycled cocoa beans from West Africa come together with smooth sandalwood from New Caledonia and warm tonka beans from Venezuela. Like Selena, who finds inspiration everywhere, this fragrance is a celebration of discovery—unexpected and undeniably rare.

            REAL RESULTS
            + 96% say the oversized pump makes it easier to press down on with any part of your hand/body
            + 95% say the shape of the bottle allows for a more secure grip
            + 90% say the size of the pump makes it easier to twist and unlock/lock the cap
            + 90% say the size and shape of the pump allow you to spray fragrance more easily

            *In a consumer study of 56 individuals with mild to severe upper extremity impairments

            THE EXPERIENCE
            MADE TO BE CUSTOMIZED
            Wear it solo or pair it with our Fragrance Layering Balms for a scent that’s customized to your mood, your moment.
            `,
          people: "/products/detailsPeopleSpray.webp",
          price: 35,
          detailsImage: "/products/detailsSprayImage.webp",
          selenaLoves: "“My days are never the same, so I wanted a fragrance that evolves for the moment. Something that could take me from a quiet morning at home to a big night out—and always feels just right.”",
          shades: [
            {
              name: "No. 10 mL",
              shadeImage: "10 mL",
              bestSellers: false,
              productImages: [
                "/products/spray1.webp",
                "/products/spray2.webp",
                "/products/spray3.webp",
                "/products/spray4.webp",
              ],
            },
          ],
        },
        {
          name: "Amber Vanilla Fragrance Layering Balm",
          video: "",
          detailsText1:
            "Designed to be worn alone or layered with Rare Eau de Parfum to add a warm, delicious layer, this silky fragrance balm evokes an indulgent moment as it melts into skin and lasts up to 12 hours.",
          detailsText2:
            `
            Rich, creamy, and comforting. Capture the joy of pure indulgence with an irresistible blend of vanilla, candied amber, and bergamot.

            Silky, lightweight texture melts effortlessly with your body heat, leaving a smooth, non-sticky finish.

            Acts as a perfume enhancer, giving it a new dimension while helping to intensify your fragrance.

            Create your custom scent story by pairing it with Rare Eau de Parfum. Layering combinations:

            Rare Eau de Parfum + Fragrance Layering Balm in AMBER Vanilla
            To add a warm, delicious layer

            Rare Eau de Parfum + Fragrance Layering Balm in FLORAL Peony Blossom
            To add a sweet, sultry layer

            Rare Eau de Parfum + Fragrance Layering Balm in FRESH Bergamot
            To add a bright, breezy layer

            Rare Eau de Parfum + Fragrance Layering Balm in WOODY Oak
            To add a rich, earthy layer

            Housed in a sleek, pocket-sized tube for ultimate portability.

            `,
          people: "/products/detailsPeopleBalm.webp",
          price: 28,
          detailsImage: "/products/detailsBalmImage.webp",
          selenaLoves: "“These layering balms are all about making fragrance fun and personal. I love pairing them with our eau de parfum to match whatever mood I’m in. It completely transforms the way the scent wears and adds dimension in a subtle way.”",
          shades: [
            {
              name: "Balm",
              shadeImage: "balm",
              bestSellers: false,
              productImages: [
                "/products/balm1.webp",
                "/products/balm2.webp",
                "/products/balm3.webp",
                "/products/balm4.webp",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      category: "lip",
      products: [
        {
          name: "Positive Light Luminizing Lip Gloss",
          video: "",
          detailsText1:
            "A smooth, glassy lip gloss that drips with shimmer and shine while hydrating lips instantly and over time",
          detailsText2:
            `
            A shimmering wash of color with a glassy finish.

            Cushiony, hydrating formula glides on smooth, softening and nourishing with pure comfort—zero stick—all day.

            Rich with light-catching shimmers that are customized in different colors and sizes to complement each shade. The result? A truly multidimensional effect for visibly plumper lips (minus the tingling).

            Drenches lips in long-lasting moisture for a replenished pout that looks and feels more hydrated over time.

            Yummy subtle peach scent.

            Available in 6 shades:
            Dazzle – sheer blue with multicolored shimmer
            Beam – peachy coral with gold and pink pearl
            Flicker – pink with pink and blue pearl
            Glimmer – rose gold with champagne and rose gold pearl
            Spark – midtone brown with rose gold and bronze pearl
            Blaze – deep brown with maroon, gold, and bronze pearl

            Net Wt. 0.11 fl. oz. | 3.3 mL

            Real results:
            + 100% said it gives lips a glass-like shine
            + 100% said lips look and feel instantly hydrated
            + 100% said lips feel smooth and comfortable
            + 98% said it replenishes dry lips

            `,
          people: "/products/detailsPeopleGloss.webp",
          price: 22,
          detailsImage: "/products/detailsGlossImage.webp",
          selenaLoves: "“I wanted to create a lip gloss that feels really good and has a ton of shimmer. It’s just so fun to wear!”",
          shades: [
            {
              name: "Dazzle",
              shadeImage: "/products/glossShade1.webp",
              bestSellers: true,
              productImages: [
                "/products/glossDazzle1.webp",
                "/products/glossDazzle2.jpg",
                "/products/glossDazzle3.jpg",
                "/products/glossDazzle4.webp",
              ],
            },
            {
              name: "Beam",
              shadeImage: "/products/glossShade2.avif",
              bestSellers: false,
              productImages: [
                "/products/glossBeam1.webp",
                "/products/glossBeam2.webp",
                "/products/glossBeam3.jpg",
                "/products/glossBeam4.webp",
              ],
            },
            {
              name: "Flicker",
              shadeImage: "/products/glossShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/glossFlicker1.webp",
                "/products/glossFlicker2.jpg",
                "/products/glossFlicker3.jpg",
                "/products/glossFlicker4.webp",
              ],
            },
            {
              name: "Glimmer",
              shadeImage: "/products/glossShade4.webp",
              bestSellers: false,
              productImages: [
                "/products/glossGlimmer1.webp",
                "/products/glossGlimmer2.webp",
                "/products/glossGlimmer3.webp",
                "/products/glossGlimmer4.jpg",
              ],
            },
            {
              name: "Spark",
              shadeImage: "/products/glossShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/glossSpark1.webp",
                "/products/glossSpark2.webp",
                "/products/glossSpark3.jpg",
                "/products/glossSpark4.webp",
              ],
            },
          ],
        },
        {
          name: "Kind Words Matte Lip Liner",
          video: "",
          detailsText1:
            "A super creamy, waterproof lip liner that glides on like a balm to define and shape lips with rich, stay-put color. Available in the same 11 made-to-match shades as Kind Words Matte Lipstick—including NEW shade Devoted.",
          detailsText2:
            `
            Incredibly smooth, balm-like glide applies evenly—no skipping or tugging!—perfect for outlining lips or coloring them in.

            Instantly defines and shapes lips with comfortable, high-pigment color and a soft matte finish.

            Long-lasting, waterproof formula not only stays put all day without smudging—it helps keep your lipstick in place, too!

            Lightweight and non-drying so lips stay soft and supple.

            Complete with a built-in sharpener.

            Available in the same 11 made-to-match shades as Kind Words Matte Lipstick
            Talented - true neutral beige
            Creative - muted peach
            Lively - rose pink
            Worthy - muted mauve
            Humble - rose mauve
            Fun - neutral mauve
            Wise - warm brown nude
            Bold - deep berry rose
            Gifted - deep dusty plum
            Strong - rich chocolate brown
            Devoted - true red

            Net Wt. 0.014oz | 0.4g

            Real results:
            + 100% said it draws smooth, even lines
            + 100% said it easily contours & fills in lips
            + 100% said lips don’t feel dry & that it’s comfortable to wear
            + 100% said it helps prevent lipstick from feathering/bleeding
            + 98% said it helps lipstick stay in place
            + 96% said it doesn’t skip or tug during application
            `,
          people: "/products/detailsPeopleLipLiner.webp",
          price: 18,
          detailsImage: "/products/detailsLipLinerImage.webp",
          selenaLoves: "“This is everything I’ve ever wanted in a lip liner. Super smooth and doesn’t tug on your lips, and made to last all day without feeling sticky.”",
          shades: [
            {
              name: "Talented",
              shadeImage: "/products/lipLinerShade1.avif",
              bestSellers: false,
              productImages: [
                "/products/lipLinerTalented1.webp",
                "/products/lipLinerTalented2.webp",
                "/products/lipLinerTalented3.webp",
                "/products/lipLinerTalented4.webp",
              ],
            },
            {
              name: "Creative",
              shadeImage: "/products/lipLinerShade2.avif",
              bestSellers: true,
              productImages: [
                "/products/lipLinerCreative1.webp",
                "/products/lipLinerCreative2.webp",
                "/products/lipLinerCreative3.webp",
                "/products/lipLinerCreative4.webp",
              ],
            },
            {
              name: "Lively",
              shadeImage: "/products/lipLinerShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/lipLinerLively1.webp",
                "/products/lipLinerLively2.webp",
                "/products/lipLinerLively3.webp",
                "/products/lipLinerLively4.webp",
              ],
            },
            {
              name: "Worthy",
              shadeImage: "/products/lipLinerShade4.avif",
              bestSellers: false,
              productImages: [
                "/products/lipLinerWorthy1.webp",
                "/products/lipLinerWorthy2.webp",
                "/products/lipLinerWorthy3.webp",
                "/products/lipLinerWorthy4.webp",
              ],
            },
            {
              name: "Humble",
              shadeImage: "/products/lipLinerShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/lipLinerHumble1.webp",
                "/products/lipLinerHumble2.webp",
                "/products/lipLinerHumble3.webp",
                "/products/lipLinerHumble4.webp",
              ],
            },
          ],
        },
        {
          name: "Soft Pinch Tinted Lip Oil",
          video: "",
          detailsText1:
            "An innovative lip jelly that transforms into a lightweight oil. Starts off glossy, then leaves lips tinted while gently plumping and staying comfortable—never sticky—all day.",
          detailsText2:
            `
            Treat lips to more love—this unique gel formula transforms on contact into a tinted oil for the comfiest kiss of color and shine your lips have ever felt.

            Never sticky and loves to be layered! Give it one swipe for a slick wash of color, or layer up for a bold, juicy pop.

            Made with jojoba and sunflower seed oil, it instantly hydrates and nourishes for soft, smooth lips that feel moisturized all day.

            Gently plumps lips for a fuller, healthier-looking pout in seconds.

            Flat, angled doe-foot applicator for easy swipe & go application.

            Available in 8 shades:
            Serenity – warm rose
            Affection – muted berry
            Happy – cool pink
            Joy – muted peach
            Delight – rose brown
            Hope – nude mauve
            Wonder – rose mauve
            Honesty – nude brown

            Net Wt. 0.10 fl. oz. | 3.0 mL

            Real results:
            + 100% said lips look smooth & healthy with improved texture
            + 100% said lips feel moisturized & comfortable all day
            + 100% said it feels lightweight & refreshing without any stickiness
            + 98% said it minimizes the look of lip lines

            `,
          people: "/products/detailsPeopleLipOil.webp",
          price: 20,
          detailsImage: "/products/detailsLipOilImage.webp",
          selenaLoves: "“One swipe and your lips look so full and smooth! I love how easily you can build up the color without it getting sticky.”",
          shades: [
            {
              name: "Serenity",
              shadeImage: "/products/lipOilShade1.avif",
              bestSellers: false,
              productImages: [
                "/products/lipOilSerenity1.webp",
                "/products/lipOilSerenity2.webp",
                "/products/lipOilSerenity3.webp",
              ],
            },
            {
              name: "Affection",
              shadeImage: "/products/lipOilShade2.avif",
              bestSellers: false,
              productImages: [
                "/products/lipOilAffection1.webp",
                "/products/lipOilAffection2.webp",
                "/products/lipOilAffection3.jpg",
                "/products/lipOilAffection4.webp",
              ],
            },
            {
              name: "Happy",
              shadeImage: "/products/lipOilShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/lipOilHappy1.webp",
                "/products/lipOilHappy2.webp",
                "/products/lipOilHappy3.webp",
                "/products/lipOilHappy4.jpg",
              ],
            },
            {
              name: "Joy",
              shadeImage: "/products/lipOilShade4.avif",
              bestSellers: false,
              productImages: [
                "/products/lipOilJoy1.webp",
                "/products/lipOilJoy2.webp",
                "/products/lipOilJoy3.webp",
                "/products/lipOilJoy4.webp",
              ],
            },
            {
              name: "Delight",
              shadeImage: "/products/lipOilShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/lipOilDelight1.webp",
                "/products/lipOilDelight2.webp",
                "/products/lipOilDelight3.webp",
              ],
            },
          ],
        },
        {
          name: "Stay Vulnerable Glossy Lip Balm",
          video: "",
          detailsText1:
            "Like a lip mask in a gloss, this ultra shiny balm cushions lips with soft, nourishing color that’s all slick, no stick. Now in a NEW, limited-edition shade Nearly Petal.",
          detailsText2:
            `
            Cushions like a balm, shines like a gloss.

            Super smooth formula wraps lips in long-lasting hydration with a hint of color and shine for plump, healthy-looking lips.

            Richly nourishing yet feels incredibly weightless and comfortable—never sticky!

            Improves lips’ texture while keeping them soft and moisturized all day.

            Available in shades:
            Nearly Petal - soft pale pink (NEW)
            Nearly Neutral – soft neutral pink
            Nearly Rose – flushed pink
            Nearly Berry – soft berry
            Nearly Mauve – soft mauve
            Nearly Apricot – soft coral

            Net Wt. 0.12 fl. oz | 3.8 mL

            Real results:
            • 100% said it glides on smooth, even, and feels weightless on lips
            • 98% said lips feel nourished & moisturized
            • 96% said lips look healthy
            • 96% said lips feel soothed, conditioned, & comfortable
            • 94% said lips feel soft, with improved texture
            `,
          people: "/products/detailsPeopleLipBalm.webp",
          price: 19,
          detailsImage: "/products/detailsLipBalmImage.webp",
          selenaLoves: "“I love that it’s like a cushiony balm and also gives a beautiful hint of color with a lot of shine.”",
          shades: [
            {
              name: "Nearly Neutral",
              shadeImage: "/products/lipBalmShade1.avif",
              bestSellers: false,
              productImages: [
                "/products/lipBalmNeutral1.webp",
                "/products/lipBalmNeutral2.webp",
                "/products/lipBalmNeutral3.webp",
                "/products/lipBalmNeutral4.webp",
              ],
            },
            {
              name: "Nearly Rose",
              shadeImage: "/products/lipBalmShade2.avif",
              bestSellers: false,
              productImages: [
                "/products/lipBalmRose1.webp",
                "/products/lipBalmRose2.webp",
                "/products/lipBalmRose3.webp",
                "/products/lipBalmRose4.webp",
              ],
            },
            {
              name: "Nearly Berry",
              shadeImage: "/products/lipBalmShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/lipBalmBerry1.webp",
                "/products/lipBalmBerry2.webp",
                "/products/lipBalmBerry3.webp",
                "/products/lipBalmBerry4.webp",
              ],
            },
            {
              name: "Nearly Mauve",
              shadeImage: "/products/lipBalmShade4.avif",
              bestSellers: false,
              productImages: [
                "/products/lipBalmMauve1.webp",
                "/products/lipBalmMauve2.webp",
                "/products/lipBalmMauve3.webp",
                "/products/lipBalmMauve4.webp",
              ],
            },
            {
              name: "Nearly Apricot",
              shadeImage: "/products/lipBalmShade5.avif",
              bestSellers: false,
              productImages: [
                "/products/lipBalmApricot1.webp",
                "/products/lipBalmApricot2.webp",
                "/products/lipBalmApricot3.webp",
                "/products/lipBalmApricot4.webp",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      category: "eye",
      products: [
        {
          name: "Brow Harmony Flexible Lifting Gel",
          video: "/products/liftingGelVideo.mp4",
          detailsText1:
            "A universal weightless clear brow gel that shapes, lifts, and sets hairs in place with a flexible hold all day.",
          detailsText2:
            `
            Uplift brows to their full potential. This flexible gel builds easily to sculpt and smooth brows for a brushed up, laminated look that sticks around all day.

            Weightless, water-based gel formula ensures a strong yet flexible hold—never stiff, sticky, or crunchy.

            Perfect for all brow shades, the clear gel dries to a natural flake- and cake-resistant finish without leaving a trace.

            Waterproof formula stands up to sweat and natural oils.

            Tapered brush made with soft yet firm bristles to evenly comb and coat even the thickest brow hairs from root to tip.

            `,
          people: "/products/detailsPeopleLiftingGel.webp",
          price: 21,
          detailsImage: "/products/detailsLiftingGelImage.webp",
          selenaLoves: "“I wanted to create my own version of a laminating gel—something you could reapply and layer without it getting crunchy or stiff. I love that this gel gives you a lifted, laminated look while still feeling soft and flexible like real brow hairs.”",
          shades: [
            {
              name: "Lifting Gel",
              shadeImage: "Gel",
              bestSellers: false,
              productImages: [
                "/products/liftingGel1.webp",
                "/products/liftingGel2.webp",
                "/products/liftingGel3.webp",
                "/products/liftingGel4.webp",
              ],
            },
          ],
        },
        {
          name: "Perfect Strokes Matte Liquid Liner",
          video: "/products/liquidLinerVideo.mp4",
          detailsText1:
            "An easy-glide, waterproof liquid eyeliner with up to 800 vegan bristles to lay down long-lasting, ultra-black lines with perfect precision every time.",
          detailsText2:
            `
            The same rich matte-black color that lasts all day—now with a new and improved brush!

            Revamped for smooth ink flow from every angle, every time without leaking or drying out, so you can draw perfect strokes with confidence.

            Easy, precise lines, thanks to the fine, flexible brush tip with up to 800 soft vegan bristles.

            Long-lasting, waterproof formula won’t fade, feather, or flake on you, so you get that just-applied look all day.


            `,
          people: "/products/detailsPeopleLiquidLiner.webp",
          price: 20,
          detailsImage: "/products/detailsLiquidLinerImage.webp",
          selenaLoves: "“ I LOVE a bold winged liner look, and this liner makes it so easy to get it precise.”",
          shades: [
            {
              name: "Liquid Liner",
              shadeImage: "Liner",
              bestSellers: true,
              productImages: [
                "/products/liquidLiner1.webp",
                "/products/liquidLiner2.webp",
                "/products/liquidLiner3.webp",
                "/products/liquidLiner4.webp",
              ],
            },
          ],
        },
        {
          name: "Perfect Strokes Longwear Gel Eyeliner",
          video: "",
          detailsText1:
            "An easy-glide, waterproof gel pencil that stays put all day—even on the waterline—with a built-in sharpener for max precision and glide every time.",
          detailsText2:
            `
            All the pigment + precision + waterproof wear of our bestselling Perfect Strokes Matte Liquid Liner —now in an easy twist-up gel pencil!

            So rich and smooth, it goes on crisp for instant definition that won’t tug or skip, even on the waterline.

            Stays creamy and blendable for stress-free playtime, so you can smudge it or smoke it out before it sets all day for fadeproof, transferproof wear.

            Includes built-in sharpener for max precision every time. TIP: Only twist up what you need—the pencil doesn’t retract.

            Comes in 3 shades:
            True Black – black
            True Brown – brown
            Compassion – burgundy

            Net Wt. 0.009 oz. | 0.25 g

            Real results:
            + 100% said it draws precise, even lines & is easy to control
            + 100% said it applies smoothly & stays put on the waterline
            + 98% said it’s long-lasting & doesn’t fade or flake all day
            + 98% said it blends easily to create a smoky eye
            + 98% said it doesn’t skip upon application
            `,
          people: "/products/detailsPeopleEyeliner.webp",
          price: 22,
          detailsImage: "/products/detailsEyelinerImage.webp",
          selenaLoves: "“I love our liquid liner so much, I just had to create a gel version to go with it! I love this pencil for soft definition and tightlining. It lasts all day, even on the waterline.”",
          shades: [
            {
              name: "True Black",
              shadeImage: "/products/eyelinerShade1.webp",
              bestSellers: false,
              productImages: [
                "/products/eyelinerBlack1.webp",
                "/products/eyelinerBlack2.webp",
                "/products/eyelinerBlack3.webp",
                "/products/eyelinerBlack4.webp",
              ],
            },
            {
              name: "True Brown",
              shadeImage: "/products/eyelinerShade2.avif",
              bestSellers: false,
              productImages: [
                "/products/eyelinerBrown1.webp",
                "/products/eyelinerBrown2.webp",
                "/products/eyelinerBrown3.webp",
                "/products/eyelinerBrown4.webp",
              ],
            },
            {
              name: "Compassion",
              shadeImage:"/products/eyelinerShade3.avif",
              bestSellers: false,
              productImages: [
                "/products/eyelinerCompassion1.webp",
                "/products/eyelinerCompassion2.webp",
                "/products/eyelinerCompassion3.webp",
                "/products/eyelinerCompassion4.webp",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      category: "body",
      products: [
        {
          name: "Puffy Makeup Bag",
          video: "/products/makeUpBagVideo.mp4",
          detailsText1:
            "Introducing a fresh way to find comfort. Store your essentials—makeup and otherwise—in this puffy quilted bag, now in our signature Find Comfort mauve. ",
          detailsText2:
            `
            Find comfort in the little things with our fan-fave Puffy Makeup bag in a soothing mauve hue, outside and in.

            Like a puffy, protective cloud to help keep your favorite things together while on the go.

            Soft, lightweight quilted nylon with a smooth-zip top and signature Rare Beauty logo.

            8.6” L x 2.4” W x 6.1” H

            Available only on RareBeauty.com
            `,
          people: "/products/makeUpBag1.webp",
          price: 20,
          detailsImage: "/products/makeUpBag2.jpg",
          selenaLoves: "“I love our puffy bag so much, I just had to create a this version to go with it!”",
          shades: [
            {
              name: "Puffy MakeUp Bag",
              shadeImage: "bag",
              bestSellers: false,
              productImages: [
                "/products/makeUpBag1.webp",
                "/products/makeUpBag2.jpg",
              ],
            },
          ],
        },
        {
          name: "Find Comfort Bouncy Body Cream",
          video: "",
          detailsText1:
            "A rich, pudding-like body cream that renews skin with a refreshing burst of hydration, restoring bounce and radiance while wrapping you in a bright, peach-floral scent.",
          detailsText2:
            `
            Bring bounce back to your skin with a burst of hydration that lasts up to 24 hours, leaving skin bright, smooth, more even, and visibly plump.

            Innovative bouncy formula soaks in fast for instantly nourished skin without feeling sticky or greasy.

            Powered by a blend of plant-derived butters (murumuru and shea), natural oils (jojoba and tsubaki), vitamin E, and niacinamide to soothe and soften.

            Infused with our newest Awaken Confidence scent of juicy peaches and fresh flower blossoms.

            Fragrance notes:
            Top: peach nectar, sparkling lemon, orange flower, black pepper
            Heart: blue cyclamen, jasmine, apricot blossom, lavender
            Dry: white sandalwood, skin musk, crisp amber

            Proudly bottled with 49% post-consumer recycled (PCR) plastic.

            Net Wt. 8.45 fl. oz. |250 mL

            Real results:
            *In an independent consumer perception test based on 55 people

            Immediately after use:
            + 96% agree their skin looks softer

            After 2 weeks:
            + 98% agree their skin looks softer

            After 4 weeks:
            + 100% agree their skin feels softer
            + 100% agree their skin texture appears smooth
            + 100% agree it reduces visible dryness
            + 100% agree it leaves their skin looking healthy
            + 100% agree their skin feels nourished and soothed
            + 98% agree their skin looks firmer
            `,
          people: "/products/detailsPeopleBodyCream.webp",
          price: 25,
          detailsImage: "/products/detailsBodyCreamImage.webp",
          selenaLoves: "“I love this scent so much, it’s so bright and refreshing! I also love the bouncy texture because it’s really comforting on your skin—there’s nothing like it.”",
          shades: [
            {
              name: "Bouncy Body Cream",
              shadeImage: "body cream",
              bestSellers: false,
              productImages: [
                "/products/bodyCream1.webp",
                "/products/bodyCream2.webp",
                "/products/bodyCream3.webp",
                "/products/bodyCream4.webp",
              ],
            },
          ],
        },
        {
          name: "Find Comfort Hydrating Hand Cream",
          video: "/products/handCreamVideo.mp4",
          detailsText1:
            "A lightweight, fast-absorbing hand cream packed with skin-loving ingredients to hydrate for up to 16 hours while nourishing and softening skin with a fresh, non-greasy feel.",
          detailsText2:
            `
            Absorbs quickly to restore moisture into skin so hands feel instantly soft and supple—never greasy or sticky.

            Infused with vitamins and antioxidants like niacinamide, peach flower extract, and ashwaganda extract (a natural de-stressor), it delivers rich hydration that actually lasts even after handwashing—while working double time to soften cuticles.

            Uplifts the senses with a calm, cozy, welcoming scent.

            Fragrance notes:
            Top: lemon zest, rhubarb, pomelo
            Mid: jasmine petals, violet, black tea extract
            Dry: vetiver, tonka beans, cashmere wood

            Luxe easy-grip bottle with rounded edges and a soft-touch finish.

            Smart, spillproof bottle opens and closes in one easy twist, with a cap that stays put so you’ll never lose it! Bottle even doubles as a hand massager to target pressure points for added benefits.

            Proudly bottled with 74% post-consumer recycled (PCR) plastic.

            Net Wt. 1.79 fl. oz. | 53 mL

            Real results:
            + 100% said it noticeably improves the look & feel of skin after just one application
            + 100% said it improves skin texture & skin feels restored
            + 100% said skin feels soft, smooth, soothed, & nourished
            + 100% said it leaves skin with a healthy glow & no sticky residue
            + 98% said skin feels hydrated even after hand washing
            `,
          people: "/products/detailsPeopleHandCream.webp",
          price: 18,
          detailsImage: "/products/detailsHandCreamImage.webp",
          selenaLoves: "“I’m obsessed with this hand cream because it’s rich yet never greasy, and the scent makes me feel calm and relaxed. I also love that it opens in just one twist—you never have to worry about losing the cap.”",
          shades: [
            {
              name: "Hydrating Hand Cream",
              shadeImage: "hand cream",
              bestSellers: false,
              productImages: [
                "/products/handCream1.webp",
                "/products/handCream2.webp",
                "/products/handCream3.webp",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      category: "tools",
      products: [
        {
          name: "Stay Vulnerable All-Over Eyeshadow Brush",
          video: "",
          detailsText1:
            "An eyeshadow brush for easy, all-over blending, with a unique dense, angled shape that mimics your fingertip for max control.",
          detailsText2:
            `
            Fluffy enough to blend seamlessly yet firm enough to give you control, this uniquely angled brush mimics your fingertip for a quick sweep of color.

            Super soft, densely packed bristles make it easy to pick up and blend out pigment.

            Designed to be paired with Stay Vulnerable Liquid Eyeshadow for the most seamless finish, but great for blending all formulas, especially liquids and creams!
            `,
          people: "/products/detailsPeopleEyeshadowBrush.webp",
          price: 15,
          detailsImage: "/products/detailsEyeshadowBrushImage.webp",
          selenaLoves: "“I love that it’s shaped like your finger, so it’s really easy to control. It has a flat side to pack on color, and a full side to blend.”",
          shades: [
            {
              name: "Eyeshadow Brush",
              shadeImage: "brush",
              bestSellers: false,
              productImages: [
                "/products/eyeshadowBrush1.webp",
                "/products/eyeshadowBrush2.webp",
              ],
            },
          ],
        },
        {
          name: "Liquid Touch Multi-Tasking Sponge",
          video: "",
          detailsText1:
            "A plush sponge with a diamond-shaped tip for precise application and customizable coverage.",
          detailsText2:
            `
            Multifaceted, diamond-shaped sponge is the ultimate multitasker.

            Diamond-shaped tip for precise application: Use under eyes, around the nose, and around corners of the mouth.

            Large, flat side blends quickly and seamlessly.

            Round bottom edge helps buff, blend, bake, and soften harsh edges.

            Ultra-soft, water-activated sponge - use wet for an airbrushed finish.
            `,
          people: "/products/detailsPeopleSponge.webp",
          price: 12,
          detailsImage: "/products/detailsSpongeImage.webp",
          selenaLoves: "“ This is my go-to applicator- I love that I can use it with any formula. ”",
          shades: [
            {
              name: "Multi-tasking Sponge",
              shadeImage: "sponge",
              bestSellers: false,
              productImages: [
                "/products/sponge1.webp",
                "/products/sponge2.webp",
              ],
            },
          ],
        },
        {
          name: "Soft Pinch Blush Brush",
          video: "",
          detailsText1:
            "A feathery soft blush brush that blends pigment-rich formulas with ease—ideal for applying liquids and creams for a soft, diffused finish.",
          detailsText2:
            `
            Multi-length, synthetic dual fibers enable you to apply pigment-rich formulas with a sheer touch, blending and building color evenly for a soft, diffused look.

            Unique angled brush shape hugs every curve and mimics the bounce of your fingertips, giving you the most controlled application.

            Soft, flexible bristles are fluffier at the ends, making it ideal for stippling and swirling out pigmented formulas.

            While it’s designed to be paired with Soft Pinch Liquid Blush, this brush works great with all liquid and cream formulas.
            `,
          people: "/products/detailsPeopleBlushBrush.webp",
          price: 14,
          detailsImage: "/products/detailsBlushBrushImage.webp",
          selenaLoves: "“This soft, feathery brush makes applying our blush and bronzer formulas completely foolproof.”",
          shades: [
            {
              name: "Pinch Blush Brush",
              shadeImage: "blush brush",
              bestSellers: false,
              productImages: [
                "/products/blushBrush1.webp",
                "/products/blushBrush2.webp",
              ],
            },
          ],
        },
      ],
    },
  ];
  
  