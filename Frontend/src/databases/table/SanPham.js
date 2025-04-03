const table = "SanPham";

const get = localStorage.getItem(table);

let SanPham = [];
if (get) {
  SanPham = JSON.parse(get);
} else {
  SanPham = [
    {
      id: 1,
      name: "Sunglasses For Cats",
      image:
        "https://s3-alpha-sig.figma.com/img/5f44/8d13/0321ca294016a45500cfb0d7db536d3b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JPBtD6NmlBA7RSd1V8~cZqoQdfzTnoMzWnrIukNOxgSr3gIBvs8dMiKuRR5wGqFycDr~DUG6BtLGwqrfIAlraZ2SbBZHcpRPqZFoaiQqY1z12MMewgVxZH6gG0QzNT1yF4pwddEkFaQHJ-TWAHnQ8vmsTxbupwaSQBln-efrYqjWtzsXuZcIpsliMTrc51IJ6kSZ1oXoP7dsvN2rU7enkb2Vf1xaN5faPUMqnI3JhOPlr3pDGTBVN1rcy03F92DiGVHFr4a-5CL5ADpHv5eJ0Nxi965Hu5XaWnWr93HKzkelFbgFvm1Hh60EUrvEYRQ~JjET1bm4NKZRegT-YSV-tg__",
      detail:
        "Color:	yellow, dark blue, pink, dark green, light green\nBrand:	Coolrunner\nFabric: Type	AC resin, alloy\nMaterial:	AC resin, Alloy\nPattern:	Retro\nSize: Frame width about 8cm/3.15in",
      description:
        "Your pets will looks fashion and cool with our sunglasses. The lenses are made of AC resin, spectacles frame using stainless steel, durable, lightweight, comfortable, easy to wear, fit for pet cat or dog as daily wear photo props or show Our glasses are available in a variety of colors and the are suitable for cats or small dogssuch as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. Suitable for small dogs or cats such as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. No clear lenses, your pets will looks fashion and cool with our punk rock sunglasses. The lenses are made of AC resin, spectacles frame using alloy metal, let the glasses looks very texture. Legs of glasses are made of spring, more comfortable to wear.",
      price: 150000,
      quantity: 150,
      sell: 4,
      categoryId: 1,
    },
    {
      id: 2,
      name: "Cactus Cat Scratcher Post",
      image:
        "https://s3-alpha-sig.figma.com/img/cbfd/d84e/f9d5037ecb617ae4bce3f5f608e376e5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibNHbJRjAJJRMxC4heoyJTIzrSCmsM~nmSg-iiipJ1YHZnNwneICnrzVpnFLyknFayr~KJI9apYt4uuer4TTxEUzTecQia8to5OzkwpZuTOPaWnS7I1NLWQdS8z0VVZMUrwqFWWV93vX~iCQ3Qk47ct68MrBTREsQ22XsdLenPIOthGryaL84gj~DOcDRR6zM7C-wR4JOvzec68O7uE4a34jjjfNnIVYZw0ihpMdIbIdYP1QZBisGLzEMXxS0jkYtFCEjCPMrjpth-IUwY-XNXTxWe2HBuEzwbs1VPaX99ka8dP78Ot0kMNhRzNCM3LyNVRG72szp5h8tofC-bvZ4Q__",
      detail:
        "Color:	yellow, dark blue, pink, dark green, light green\nBrand:	Coolrunner\nFabric: Type	AC resin, alloy\nMaterial:	AC resin, Alloy\nPattern:	Retro\nSize: Frame width about 8cm/3.15in",
      description:
        "Your pets will looks fashion and cool with our sunglasses. The lenses are made of AC resin, spectacles frame using stainless steel, durable, lightweight, comfortable, easy to wear, fit for pet cat or dog as daily wear photo props or show Our glasses are available in a variety of colors and the are suitable for cats or small dogssuch as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. Suitable for small dogs or cats such as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. No clear lenses, your pets will looks fashion and cool with our punk rock sunglasses. The lenses are made of AC resin, spectacles frame using alloy metal, let the glasses looks very texture. Legs of glasses are made of spring, more comfortable to wear.",
      price: 150000,
      quantity: 150,
      sell: 0,
      categoryId: 2,
    },
    {
      id: 3,
      name: "Winter Cat Clothes",
      image:
        "https://s3-alpha-sig.figma.com/img/f5db/fb91/2f5b0da2b107a03cbd47e3377c9ba15f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBTMuc55qAuUkvx6iaxaWNpotvaJ0mZ3IoHxNxyVNxzFmmiGKE6Nrdqu2OGtYPEtzKwR-TO8OIFoMDm~xm3nWxC3arSsoeAjjyoAmIIHXjE7me~7rYUw9peCrW9nA~kDRHxuEgyYQvxRONHhFUmHLBuKxR7SVldZiVh82quFRfHR0ChE7Dz4lioxGcqRyhsLp2HicX4D2Et4z3zlbtzCkkbLrOCEn5~G0yeKspdu9M1kWRNe1b7s6mNaNTwItx~y6dGx0k08l5dVbZb-4iDD5SDJj3GJtYo4mAd4cGhKjX42ALFBKJ2yborgS~kQL-X5rTbV0lLTWJ9ORwsloFK0JA__",
      detail:
        "Color:	yellow, dark blue, pink, dark green, light green\nBrand:	Coolrunner\nFabric: Type	AC resin, alloy\nMaterial:	AC resin, Alloy\nPattern:	Retro\nSize: Frame width about 8cm/3.15in",
      description:
        "Your pets will looks fashion and cool with our sunglasses. The lenses are made of AC resin, spectacles frame using stainless steel, durable, lightweight, comfortable, easy to wear, fit for pet cat or dog as daily wear photo props or show Our glasses are available in a variety of colors and the are suitable for cats or small dogssuch as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. Suitable for small dogs or cats such as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. No clear lenses, your pets will looks fashion and cool with our punk rock sunglasses. The lenses are made of AC resin, spectacles frame using alloy metal, let the glasses looks very texture. Legs of glasses are made of spring, more comfortable to wear.",
      price: 150000,
      quantity: 150,
      sell: 9,
      categoryId: 2,
    },
    {
      id: 4,
      name: "Soft Pet Clothes",
      image:
        "https://s3-alpha-sig.figma.com/img/003c/b9b6/774c903d19b233f66670e66dcd005d92?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kwuY8N~dngtvQlKjQk~HjoMM7xfTlV3dMx5uGWjMeu-JnjtdM4eGEPK-VNuYb5~NJSte6ytSqIsgQD3Bpr0uaCLhwJX-ZciLlozXuwjBqRd921kIPv5wUTbnRQE5hEYMgsbtrrP8LStp9X9EjcDZvZtJM26o5yAagJ~UTAFR5Nboc2HPmQwKBpw0ZJ2M9QaLiJovIMi8B9il1Lid9Iu2jYSaPaG-SvAEBNgpOq0bBxigDklCPY1xrjuM-OsXIV9c7e85Z2BknOYKFfTEcBpoYtMS2H5I-bubSEFikXrr270cDAeue5rjNUnvLqNTdSZkNaC7K2TIJhuXZUw3u5SwUA__",
      detail:
        "Color:	yellow, dark blue, pink, dark green, light green\nBrand:	Coolrunner\nFabric: Type	AC resin, alloy\nMaterial:	AC resin, Alloy\nPattern:	Retro\nSize: Frame width about 8cm/3.15in",
      description:
        "Your pets will looks fashion and cool with our sunglasses. The lenses are made of AC resin, spectacles frame using stainless steel, durable, lightweight, comfortable, easy to wear, fit for pet cat or dog as daily wear photo props or show Our glasses are available in a variety of colors and the are suitable for cats or small dogssuch as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. Suitable for small dogs or cats such as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. No clear lenses, your pets will looks fashion and cool with our punk rock sunglasses. The lenses are made of AC resin, spectacles frame using alloy metal, let the glasses looks very texture. Legs of glasses are made of spring, more comfortable to wear.",
      price: 150000,
      quantity: 150,
      sell: 0,
      categoryId: 2,
    },
    {
      id: 5,
      name: "Smart Cat Teaser Toy",
      image:
        "https://s3-alpha-sig.figma.com/img/af8c/051a/c4243667f1c017afde0cf1500bb30315?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8NKVKEHdDaiIuEbKjLxY-fSbm3h-j9oBTf8-M00F7CragWBMmdOU5KXwEDwoaiVu7B9ejFQubJZU4IeFC7vbCEC11Fsg1NPIeUqxZ0QpTVmShtHLiXcd~KrYt5dBS2m5PAvum9b8NnNa4MxILEQ40yXjOYNW6PnbenwIwNgrYcKudVSLKQ93nlNAUbR6akoleRFXegKfbShP7VsKpZTSf-IerV16ETVgVl2RskJDAEwtzcMTXBSt92c2fE7hzygYexhxlINPSvUeuLesptZ6Fq3GX4lP2Yzgau6oTlG2mO9HktsaD34m1B7Bw36PLOFEu1ZOS~qer6ag0mxPD8IKg__",
      detail:
        "Color:	yellow, dark blue, pink, dark green, light green\nBrand:	Coolrunner\nFabric: Type	AC resin, alloy\nMaterial:	AC resin, Alloy\nPattern:	Retro\nSize: Frame width about 8cm/3.15in",
      description:
        "Your pets will looks fashion and cool with our sunglasses. The lenses are made of AC resin, spectacles frame using stainless steel, durable, lightweight, comfortable, easy to wear, fit for pet cat or dog as daily wear photo props or show Our glasses are available in a variety of colors and the are suitable for cats or small dogssuch as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. Suitable for small dogs or cats such as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. No clear lenses, your pets will looks fashion and cool with our punk rock sunglasses. The lenses are made of AC resin, spectacles frame using alloy metal, let the glasses looks very texture. Legs of glasses are made of spring, more comfortable to wear.",
      price: 150000,
      quantity: 150,
      sell: 1,
      categoryId: 1,
    },
    {
      id: 6,
      name: "Soft Mesh Pet Harnesses",
      image:
        "https://s3-alpha-sig.figma.com/img/a8c0/1dd3/588fc28c537e0a76463f896867c64619?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hp0sENbh97iDy2QvWVy-amXu6rip5dKGoshqTuQNjPo82w-mS0N39CLGC-CGXxmWWTVKgZHnAcGaqMr~2zWRj9T7TcUwjB65a921Rdm5yNAGcPLrDWS0OVRsqgvyiu1KlhsDBXMRcz2aVixQ8PjtdYhYoDZqoT4MLqGILVcVtB-o~R93xBkWh90FPZAWwQh~L8ujudjNgCY4WLzz6N1LigqumMGOvyo9R44LBW-4YsQaakWeFWnqhJWM1MGR5fEs0qrPwRYQ~e43lRXq-Hd0zhHNTx0tTBtpxX1cSwLmu7sY7QfTLDXU8XUMB-3aIWW7hhOxqZO~6H8YJ0ozt1CMLg__",
      detail:
        "Color:	yellow, dark blue, pink, dark green, light green\nBrand:	Coolrunner\nFabric: Type	AC resin, alloy\nMaterial:	AC resin, Alloy\nPattern:	Retro\nSize: Frame width about 8cm/3.15in",
      description:
        "Your pets will looks fashion and cool with our sunglasses. The lenses are made of AC resin, spectacles frame using stainless steel, durable, lightweight, comfortable, easy to wear, fit for pet cat or dog as daily wear photo props or show Our glasses are available in a variety of colors and the are suitable for cats or small dogssuch as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. Suitable for small dogs or cats such as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. No clear lenses, your pets will looks fashion and cool with our punk rock sunglasses. The lenses are made of AC resin, spectacles frame using alloy metal, let the glasses looks very texture. Legs of glasses are made of spring, more comfortable to wear.",
      price: 150000,
      quantity: 150,
      sell: 122,
      categoryId: 3,
    },
    {
      id: 7,
      name: "Silicone Waterproof Pet Mat",
      image:
        "https://s3-alpha-sig.figma.com/img/ce50/8b97/3c925627524ae4a52de0ceb61a951b57?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GTSwVg6zWBWftriI7m1LSEMcZOaBOd3PeaNwnsX8EcmlEb2Pjct8j4V0dYinmiRxOhaQnz1obeZj7Fm8s5MwR0u6z7i40IYSWf~TH3aY64QYuvibfab-Iz-jZ8HS6LpSpg6TXfEu6sSTzCnj4UDM-4arM8y7vQwb6T68KHBbcE5hd3K5CKjycTg6judLVGFfC0LNUQxSwO7esIHLlwxZAdORcBoL4eeAcf0oTktGU94fPgiP1zWBAufsXScZzwyAAA7fgJiq1jDw9uQIoxoo8HOkL7E~2ih8IBtty84~3ncPxx80No5qNUiz6-w6XMDs2B7pfEgnGq8zpNeS2YylBA__",
      detail:
        "Color:	yellow, dark blue, pink, dark green, light green\nBrand:	Coolrunner\nFabric: Type	AC resin, alloy\nMaterial:	AC resin, Alloy\nPattern:	Retro\nSize: Frame width about 8cm/3.15in",
      description:
        "Your pets will looks fashion and cool with our sunglasses. The lenses are made of AC resin, spectacles frame using stainless steel, durable, lightweight, comfortable, easy to wear, fit for pet cat or dog as daily wear photo props or show Our glasses are available in a variety of colors and the are suitable for cats or small dogssuch as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. Suitable for small dogs or cats such as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. No clear lenses, your pets will looks fashion and cool with our punk rock sunglasses. The lenses are made of AC resin, spectacles frame using alloy metal, let the glasses looks very texture. Legs of glasses are made of spring, more comfortable to wear.",
      price: 150000,
      quantity: 150,
      sell: 8,
      categoryId: 4,
    },
    {
      id: 8,
      name: "Whack A Mole Cat Toy",
      image:
        "https://s3-alpha-sig.figma.com/img/089d/0e33/1695d56cb7cc2385d155dfe6530308e0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWAyzlxaemjE33WR4l2VshrnHhPhoElw~MkAphCm6UNmchHVaP~srISHbMgeS8SPlhnyyne1sLAA5X8AtuimN71uRZb7dqY3a0cSQD14CQljpn-JPtOK9vvisRQtUAInhcQMe1TCmX~ZHzgJLm9VjROpOr8b2W5g1~-NjWOW6plMveZwZKffFJ4bF5vfq5E22ELRC-d4tnhH6eTh-6OERU5HiwHYslHUOXAMxXhvRgaW7jadqi0wk1Mk-vikn4MXnVaIbGgM77swHzHcXIXQe-bRmwVg-B8o8XB0a9xFp7wNYIqckSkvoDs4h61liT3AgYer~Magy1rTEWvukwguCA__",
      detail:
        "Color:	yellow, dark blue, pink, dark green, light green\nBrand:	Coolrunner\nFabric: Type	AC resin, alloy\nMaterial:	AC resin, Alloy\nPattern:	Retro\nSize: Frame width about 8cm/3.15in",
      description:
        "Your pets will looks fashion and cool with our sunglasses. The lenses are made of AC resin, spectacles frame using stainless steel, durable, lightweight, comfortable, easy to wear, fit for pet cat or dog as daily wear photo props or show Our glasses are available in a variety of colors and the are suitable for cats or small dogssuch as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. Suitable for small dogs or cats such as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. No clear lenses, your pets will looks fashion and cool with our punk rock sunglasses. The lenses are made of AC resin, spectacles frame using alloy metal, let the glasses looks very texture. Legs of glasses are made of spring, more comfortable to wear.",
      price: 150000,
      quantity: 150,
      sell: 50,
      categoryId: 4,
    },
    {
      id: 9,
      name: "Wooden 2/3 Levels Cat Toy ",
      image:
        "https://s3-alpha-sig.figma.com/img/626c/42fe/344976fe5c2298613a888af6c2f682c8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SG994aOxx9vEMKxuOCXyJ3gXX89~JnUIA17bR-e3HkBmFR~9lyQxKvlU26xNtYbTbw9FeejUxzszxFgN9mZtvP-8Bcf03BcapF0YfUqKjgQRu~3X3il32z1DBfkltwraW3N2FnYbiTWOHzKp5aALve2fv7aUVn8eMa5zcHmR-4x3qcyDdNBQae4OHg6eA~CoYEtLKVaoU-VDZFJkSCnyn4bEU3KY-tukwKqhLUbgMHExLBROgK7amOcv5MUTkNWGgA4TOUeEoNKDT8RKQ1SjKgpZG7~zD0S3LeXZBcICQpzP9TiqZsGN~cNz9nmWvTpaW1r2AA5GytEoeGPNytMOOw__",
      detail:
        "Color:	yellow, dark blue, pink, dark green, light green\nBrand:	Coolrunner\nFabric: Type	AC resin, alloy\nMaterial:	AC resin, Alloy\nPattern:	Retro\nSize: Frame width about 8cm/3.15in",
      description:
        "Your pets will looks fashion and cool with our sunglasses. The lenses are made of AC resin, spectacles frame using stainless steel, durable, lightweight, comfortable, easy to wear, fit for pet cat or dog as daily wear photo props or show Our glasses are available in a variety of colors and the are suitable for cats or small dogssuch as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. Suitable for small dogs or cats such as Chihuahua, Pomeranian, Small Poodle, Yorkshire, Shorthair, Persian, Puppet, etc. No clear lenses, your pets will looks fashion and cool with our punk rock sunglasses. The lenses are made of AC resin, spectacles frame using alloy metal, let the glasses looks very texture. Legs of glasses are made of spring, more comfortable to wear.",
      price: 150000,
      quantity: 150,
      sell: 20,
      categoryId: 5,
    },
  ];
  localStorage.setItem(table, JSON.stringify(SanPham));
}

export default SanPham;
