const table = "TinTuc";

const get = localStorage.getItem(table);

let TinTuc = [];

if (get) {
  TinTuc = JSON.parse(get);
} else {
  TinTuc = [
    {
      id: 1,
      title: "How to Trim Cat’s Nails Easily",
      image:
        "https://s3-alpha-sig.figma.com/img/1f86/8865/53e9bea55b7c49e3133a6e1467588abf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I1a5WBfHUvW~jHSMkiceWPCT-dbuqVLH67GFPJhovbGHLdx9hFtmYw0HOLKRQNbfMP1SSsur3G3mBvFhxIw7re4I3NDwvTfvSz~E4coPesYUmzOAxIJZH7qeoOG4tXDBjljrKGCu4WmQKUkm-yabKS~PiTtlO9DQrOJCYmzRz24yxYTsNiuRlqHU5ePwTvEnxOfS9yozCbdTsa1ck~DimvoABAT4YBbfrAyeRl~8dOlE4E1Oz4McEb0LFc34f~AYSFZaJCNlzQaGI0VDzu01enj2YsE92VGwMszb2bbeuH4uX7nY~CxpEjmZXaXfmkoj3~aAdxQ77DWyq3-t-FLDLw__",
      content:
        "If you're wondering whether it is necessary to trim a cat's claws, trimming a cat's claws every few weeks is an important part of maintaining your pet's health. Not only does a quick trim protect you, your pet and your family, it can also save your sofa, curtains and other furniture. If the idea of trimming a cat's claws has you biting your nails, know that all it takes is some [...]",
      time: "29/11/2024",
    },
    {
      id: 2,
      title: "BENEFITS FROM HAVING A SELF-CLEANING CAT LITTER BOX",
      image:
        "https://s3-alpha-sig.figma.com/img/00d2/b590/55000704364d0eb3532a6f54ca0db7f9?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cQnQYFAgVzF4zMKaYxPTIYGguCo9iUSxqXJzo2blmpeozKhVfygI8ZfMuPxwjuFxLpREug8vI~29Ba3qfBjJSOqt-kbZoNz6iOD2FhfBowSu4qayH8tdjDb3hvVCz87DOIxNRyD--SQIbGjjntWauuJsVsfA~zyUp5o3Az9NJvxayJ0h4YX8VMJp3S7-aN-gCpkkCvDRxVPHCDkOE5L5I4FwFEb69VWtl4xDGbDNtmE0BX4W-0NogzPdlHMr-1Gxp33ig-9dIOsh6KlWTWi5PU1F6pIgyAAHKWdRWAscOKOJF7qFaylzC-5KoXBJr3-OsYr8MhYuQl7CUwNWOyRf2A__",
      content:
        "It’s every cat owner’s dream: a litter box that scoops itself. But, how effective are these devices? Do they live up to the claims that they can save you time and hassle? Are they worth the high cost?An automatic litter box is a win-win situation for both the cat parent and their feline; you get a break from [...]",
      time: "27/11/2024",
    },
    {
      id: 3,
      title: "THINKING OF GETTING A CAT?",
      image:
        "https://s3-alpha-sig.figma.com/img/205d/602c/7f031271af4be9bfb12aae4087b2da51?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VvCVn6GsHlQA0KDaS6MlYx9vkWU0nwLGJ9gQXZoDDn7QsBJQqBc-GyfPkJujzCJUqkR0s1b2sCp6eZ2LiB1dEoDmiAC~B5oYfALPyDlNDncO2KLNTIYqHZzkgFFdiQjjFq~jB7aBzUEfadqOHC0GXsNu3LoPG3YDOS6pMDnBELAP1ua38LXcgImWMnB-LNFNDbdTmmEc9d4MJB7OVG-W87zAFJAfofO0Gr9UGM54vH0QseHk1atERy5WhKCJFtimZ421rS4amER7uXW2eS~sSeoEgazQb5RsUk8quIC5xs4Mrca02oKQwnD7NoPNKi5pQHOw4GS2xEI9C4hTjgGr6Q__",
      content:
        "What is important is that you try to find a cat that will interact with you if you want it to. All cats are not the same and how each individual cat behaves with you can depend on its inherent personality and early experiences (or lack of experiences), which can make it fearful or confident with people and life in general. The environment in which you keep a cat is [...]",
      time: "15/11/2024",
    },
    {
      id: 4,
      title: "TIPS FOR A CLEAN HOME AND HEALTHY CAT",
      image:
        "https://s3-alpha-sig.figma.com/img/2d04/e6ad/c3b5c38c97e90a7b262bc4a628d44738?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qVlaC1nxOwB2LS4TwoWQE0y9Ii4K36YBJ3JRVEcPTebchpCqQPAQYb~xpcr8BYVte~-UYMrqr3XoqphdkugkMp1g8wIpEkPCYhxWdvl4XLcBn7z3wZI0lV~0AvHZWIOmscqVxJV7XJ0cuq4OD3CrYEPphqzH7Q5gqRnboOWysJ0d8YSvPZRaBBZsGHDJy2RxsonzpaGWHB2w307xMksP3KKF~Mrsc8ko6wDv6VelcDDueKcbgXFM1CFZMmpZgkL~8HC55FY3WlAvds9UNufbizDsTJv9tuNFO-lm9a28dtgGPbEoAaSk-eaecm9D0MwXvIokAabxbNg88S-HhYXmqg__",
      content:
        "Your fabulous feline may think cat hair is the ultimate accessory. If you don’t agree, start by getting a good vacuum cleaner. Look for one with strong suction that has a pet hair attachment. Don’t forget to vacuum chairs and curtains. Wear wet rubber gloves and run your hands over your cat’s favorite spots [...]",
      time: "02/11/2024",
    },
    {
      id: 5,
      title: "HOW TO MAKE YOUR CAT HAPPY: 10 THINGS YOU CAN DO RIGHT NOW",
      image:
        "https://s3-alpha-sig.figma.com/img/4f35/e7d3/f0e91a41f333c20f36feb2eae0303b23?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juEdjWawpMmTDV3SOrMlhfQ~AP2gGSZyj43LrzIfMjnUwVympzD0gyCRbgJI0s3AV8FSGi5gzld9BnLX6dgrhI6rGmrZ-LU7beUNj7jZbJTimTRmx-2Zd4GTQ2TMkkxVG0nJv3XMiBUKHpECyRSApuh-uYx~PLpB2KXQOO-HrZreI3vNcwfp67sz4UPqvvFyiRVEB1fg4oHWOWyMTIxZEckmmR7u4ba-HM5EjnsT5v9w9V5cG4f~eOoRP26FSosPUZveMuG5sN57rU~kzuhPY51MNX0yf~fQkWp0qY1-3-yvMbCYLL4cj7~0-0wdemPR0Q6xEYItrYyhXyHsTDLV1Q__",
      content:
        "Some people assume that cats are self-sufficient and that they are just fine spending time on their own. But even if they don’t mind spending time by themselves, they still want you to keep them company and give them attention on a daily basis. Cuddle and snuggle with your cat every day, play  [...]",
      time: "28/10/2024",
    },
    {
      id: 6,
      title: "THINGS YOU MAY NOT KNOW ABOUT YOUR CUTE LITTLE CATS",
      image:
        "https://s3-alpha-sig.figma.com/img/213f/e966/f04c7602a63c318d16a79b171d23cdff?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hVkUYcU4AnKvWlUcZsd-49XupkH7VDgTXVXgjAwRFlkXolR4StB0wSk7ioUuL5Q9WKbauF66WD32DLcPaim0iWDJXJFg1rGbxJpWS67Z1oBZ3iZpjDb3c39SZc8cSE2o9BB911yCROs8tD0Emy-d7Np9WKoWKpsn0agJulZ1qFUe43M5BP5KtnsGmelfSKrdvJuVnuinrtE2-wOWGn7-ICwkxKubtlVIagcHYfvjGYdEZ2-van7vSjezqNYUsuVxD4OMdrJlDVQHWtvITDevw-vht-Q3jODofy7ZA5XzVgqZqIN8zN6AWSUzFT1yUMDnFlk7mew3DBdpnb~nWC19lA__",
      content:
        "Nighttime can be a great time for hunting! Cats can see well in the dark. Their pupils become very large and their eyes glow. A cat’s whiskers can help them in the dark also. In order to get through small spaces, a cat will use their whiskers to see if the rest of their body will fit. Cats have 24 whiskers [...]",
      time: "17/10/2024",
    },
    {
      id: 7,
      title: "Tips For A Clean Home And Healthy Cat",
      image:
        "https://s3-alpha-sig.figma.com/img/bbf3/2754/cd05a9906684f8fe9170473637d971d4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fkVJxtLO7oYOfORN6sq7sQ4g3BHqlptBCdvM-Up5098b0kZbp~dr7cJV-Esc4Kx~CBGD0zZfL8IzwFqtPZV20gAa0qhd4R2YoIWn~kJANs8uRVcOFaoheLZfjW4rS1U7qsx9MLkBv2e6towejSQ5JZ57CdABogsdwrZ1cNVEJRrI28m~Vnp4NGP5gQKtFM4GQscb~HRjgJmy-uNMfk6Aa0G1oi8ywOCWoH9CSvSewMJzR7UoyivKKxUyuaESH3aQXve20~cJPXF4j1dXyoSsPLSFEwb6FZbxkrf9NATJHqSJ-hK7phet~cmGIsqdHKZ4DlCO9Koe4~T5pVFIXWNUIQ__",
      content:
        "Some people assume that cats are self-sufficient and that they are just fine spending time on their own. But even if they don’t mind spending time by themselves, they still want you to keep them company and give them attention on a daily basis. Cuddle and snuggle with your cat every day, play  [...]",
      time: "12/08/2024",
    },
  ];
  localStorage.setItem(table, JSON.stringify(TinTuc));
}

export default TinTuc;
