export interface GolfPlace {
  name: string;
  location: string;
  holes: string;
  yards: string;
  description: string;
  mapLink: string;
  images: string[];
}

export const golfPlaces: GolfPlace[] = [
  {
    name: "Luang Prabang Golf Club",
    location: "Luang Prabang, Laos",
    holes: "18 Holes",
    yards: "7,200 yards",
    description: "Set against stunning mountain backdrops, this championship course offers a challenging yet scenic experience designed to blend with the natural landscape.",
    mapLink: "https://www.google.com/maps/place/Luang+Prabang+Golf+Club/@19.867168,102.085388,14z/",
    images: [
      "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/06/06/5b172fb47abc957b64518a7b_GettyImages-942686126.jpg.rend.hgtvcom.966.644.suffix/1573243603510.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMQ18lPn87gC2hJAVe4XhQmNdPQBy-wpRQw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUjaCG6jryTAtJLVh_vPMv3MirNAVNckC7Q&s",
      "https://govigolf.com/images/golf_club_picture/42349177055_85009f425a_z.jpg"
    ]
  },
  {
    name: "Long Vien Golf Club",
    location: "Vientiane, Laos",
    holes: "18 Holes",
    yards: "6,850 yards",
    description: "One of Vientiane's premier courses featuring rolling fairways, strategic bunkering, and scenic water features. Known for excellent conditioning.",
    mapLink: "https://www.google.com/maps?ll=17.903951,102.68792",
    images: [
      "https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-f64095a661d8b05ad0433ef9da08b1f83dd23d24.jpg",
      "https://www.golfasian.com/wp-content/uploads/2018/04/Long-Vien-Golf-Club-4-800x533.jpg",
      "https://www.laosgolf.com/images/long-vien-golf-club-2.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4f/2a/1c/long-vien-golf-club.jpg"
    ]
  },
  {
    name: "SEA Games Golf Club",
    location: "Vientiane, Laos",
    holes: "27 Holes",
    yards: "7,100 yards",
    description: "Built for the SEA Games, this course offers a challenging layout with wide fairways and large greens. Host to numerous international tournaments.",
    mapLink: "https://www.google.com/maps/place/SEA+Games+Golf+Club/@18.063169,102.727647",
    images: [
      "https://www.pgaresort.com/images/content/homepageclubslidersmallimg/palm-harbor---innisbrook-resort---golf---2024-folklore-films-_12-1-.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/10/9e/3d/2a/sea-games-golf-club.jpg",
      "https://www.laosgolf.com/images/sea-games-golf-club-3.jpg",
      "https://golfasian.com/wp-content/uploads/2018/04/Sea-Games-Golf-Club-5-800x533.jpg"
    ]
  },
  {
    name: "Luang Prabang Golf Club",
    location: "Luang Prabang, Laos",
    holes: "18 Holes",
    yards: "7,200 yards",
    description: "Set against stunning mountain backdrops, this championship course offers a challenging yet scenic experience designed to blend with the natural landscape.",
    mapLink: "https://www.google.com/maps/place/Luang+Prabang+Golf+Club/@19.867168,102.085388,14z/",
    images: [
      "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/06/06/5b172fb47abc957b64518a7b_GettyImages-942686126.jpg.rend.hgtvcom.966.644.suffix/1573243603510.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMQ18lPn87gC2hJAVe4XhQmNdPQBy-wpRQw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUjaCG6jryTAtJLVh_vPMv3MirNAVNckC7Q&s",
      "https://govigolf.com/images/golf_club_picture/42349177055_85009f425a_z.jpg"
    ]
  },
  {
    name: "Long Vien Golf Club",
    location: "Vientiane, Laos",
    holes: "18 Holes",
    yards: "6,850 yards",
    description: "One of Vientiane's premier courses featuring rolling fairways, strategic bunkering, and scenic water features. Known for excellent conditioning.",
    mapLink: "https://www.google.com/maps?ll=17.903951,102.68792",
    images: [
      "https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-f64095a661d8b05ad0433ef9da08b1f83dd23d24.jpg",
      "https://www.golfasian.com/wp-content/uploads/2018/04/Long-Vien-Golf-Club-4-800x533.jpg",
      "https://www.laosgolf.com/images/long-vien-golf-club-2.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4f/2a/1c/long-vien-golf-club.jpg"
    ]
  },
  {
    name: "SEA Games Golf Club",
    location: "Vientiane, Laos",
    holes: "27 Holes",
    yards: "7,100 yards",
    description: "Built for the SEA Games, this course offers a challenging layout with wide fairways and large greens. Host to numerous international tournaments.",
    mapLink: "https://www.google.com/maps/place/SEA+Games+Golf+Club/@18.063169,102.727647",
    images: [
      "https://www.pgaresort.com/images/content/homepageclubslidersmallimg/palm-harbor---innisbrook-resort---golf---2024-folklore-films-_12-1-.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/10/9e/3d/2a/sea-games-golf-club.jpg",
      "https://www.laosgolf.com/images/sea-games-golf-club-3.jpg",
      "https://golfasian.com/wp-content/uploads/2018/04/Sea-Games-Golf-Club-5-800x533.jpg"
    ]
  }
];

export interface PopularGolfPackage {
  title: string;
  duration: string;
  desc: string;
  priceTag: string;
  img: string;
}

export const popularGolfData: PopularGolfPackage[] = [
  {
    title: "Family Golf Getaway",
    duration: "2 Rounds + Junior Clinic",
    desc: "2 rounds for adults + free junior clinic (ages 6-12). Family resort with pool, kids menu, and family tee times.",
    priceTag: "2 Rounds + Child Clinic",
    img: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/06/06/5b172fb47abc957b64518a7b_GettyImages-942686126.jpg"
  },
  {
    title: "Premium Golf & Family",
    duration: "3 Rounds + Kids Camp",
    desc: "3 rounds at top courses, 2-night luxury stay, supervised kids golf camp (4+ hours) and family spa.",
    priceTag: "3 Rounds + Kids Camp",
    img: "https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-f64095a661d8b05ad0433ef9da08b1f83dd23d24.jpg"
  },
  {
    title: "Resort Stay & Play",
    duration: "2N + 2R + Child Meals",
    desc: "Luxury resort stay with 2 rounds of golf, complimentary child meals, and family-friendly activities.",
    priceTag: "2N + 2R + Child Meals",
    img: "https://www.pgaresort.com/images/content/homepageclubslidersmallimg/palm-harbor---innisbrook-resort---golf---2024-folklore-films-_12-1-.jpg"
  },
  {
    title: "Championship Junior",
    duration: "2R + Pro Lesson",
    desc: "2 championship rounds, professional caddie, plus free junior rental set and 1-hour lesson with pro.",
    priceTag: "2R + Pro Lesson",
    img: "https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-f64095a661d8b05ad0433ef9da08b1f83dd23d24.jpg"
  }
];

export interface Trip {
  id: string;
  title: string;
  image: string;
  description: string;
  highlights: string;
  price: string;
  duration: string;
  icon: string;
}

export const popularTrips: Trip[] = [
  {
    id: "luangPrabang",
    title: "Luang Prabang",
    image: "https://s27363.pcdn.co/wp-content/uploads/2024/11/Laos-Header-Image.jpg.webp",
    description: "Ancient temples & alms giving ceremony",
    highlights: "Ancient temples, Alms giving ceremony, Mount Phousi sunset, Kuang Si Falls, Mekong River cruise",
    price: "$299",
    duration: "3 Days / 2 Nights",
    icon: "fa-landmark"
  },
  {
    id: "vangVieng",
    title: "Vang Vieng",
    image: "https://media.nomadicmatt.com/2022/vangvieng1.jpeg",
    description: "Karst mountains & blue lagoons",
    highlights: "Blue Lagoon, Tham Phu Kham cave, Kayaking on Nam Song River, Hot air balloon, Rock climbing",
    price: "$199",
    duration: "2 Days / 1 Night",
    icon: "fa-mountain"
  },
  {
    id: "kuangSi",
    title: "Kuang Si Falls",
    image: "https://media.worldnomads.com/explore/laos/5-things-laos-social.jpg",
    description: "Turquoise waterfalls & jungle pools",
    highlights: "Turquoise waterfall pools, Bear Rescue Centre, Hiking trails, Picnic areas, Swimming",
    price: "$89",
    duration: "Full Day",
    icon: "fa-water"
  },
  {
    id: "plainOfJars",
    title: "Plain of Jars",
    image: "https://www.golaos.tours/wp-content/uploads/2025/07/Laos-Travel-Budget-guide.jpg",
    description: "Megalithic archaeological mystery",
    highlights: "Megalithic jars sites, Local village visits, War museum, Traditional Hmong culture",
    price: "$249",
    duration: "2 Days / 1 Night",
    icon: "fa-archaeology"
  }
];

export interface TravelPackage {
  title: string;
  duration: string;
  description: string;
  image: string;
}

export const travelPackages: TravelPackage[] = [
  {
    title: "Luang Prabang Express",
    duration: "1N 2D",
    description: "Experience the beauty of Luang Prabang in this express tour. Visit ancient temples, witness the alms giving ceremony, and explore the night market. Includes accommodation and guided tours.",
    image: "https://www.nomadicmatt.com/wp-content/uploads/2018/02/laosguide.jpg"
  },
  {
    title: "Luang Prabang Complete",
    duration: "2N 3D",
    description: "Complete Luang Prabang experience including Kuang Si Falls, Pak Ou Caves, Mount Phousi sunset, and a Mekong River cruise. All meals and accommodation included.",
    image: "https://www.outlooktravelmag.com/media/laos-1-1582543904.profileImage.2x-scaled-webp.webp"
  },
  {
    title: "Vang Vieng Adventure",
    duration: "2N 3D",
    description: "Adventure package featuring kayaking on Nam Song River, exploring Blue Lagoon, Tham Phu Kham cave, and hot air balloon ride over limestone karsts.",
    image: "https://media.nomadicmatt.com/2022/vangvieng1.jpeg"
  },
  {
    title: "Kuang Si Falls Tour",
    duration: "1D",
    description: "Full day tour to the stunning Kuang Si Falls. Swim in turquoise pools, visit the Bear Rescue Centre, enjoy a picnic lunch, and explore local villages.",
    image: "https://media.worldnomads.com/explore/laos/5-things-laos-social.jpg"
  },
  {
    title: "Plain of Jars Discovery",
    duration: "2D",
    description: "Discover the mysterious Plain of Jars UNESCO site. Explore ancient megalithic sites, visit local villages, and learn about the region's history and culture.",
    image: "https://www.golaos.tours/wp-content/uploads/2025/07/Laos-Travel-Budget-guide.jpg"
  },
  {
    title: "LP Cultural Tour",
    duration: "1N 2D",
    description: "Immersive cultural experience with monk chat session, traditional Lao cooking class, paper making workshop, and night market tour.",
    image: "https://s27363.pcdn.co/wp-content/uploads/2024/11/Laos-Header-Image.jpg.webp"
  }
];

export const golfPackages: TravelPackage[] = [
  {
    title: "LP Golf Getaway",
    duration: "2 Rounds",
    description: "Enjoy 2 rounds of golf at Luang Prabang Golf Club. Includes green fees, caddie, golf cart, and luxury accommodation. Perfect for golf enthusiasts.",
    image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/06/06/5b172fb47abc957b64518a7b_GettyImages-942686126.jpg"
  },
  {
    title: "Premium Golf Experience",
    duration: "3 Rounds",
    description: "Premium golf experience with 3 rounds at top courses, luxury resort accommodation, spa treatment, and gourmet dining. All transfers included.",
    image: "https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-f64095a661d8b05ad0433ef9da08b1f83dd23d24.jpg"
  },
  {
    title: "Resort Golf Package",
    duration: "2N + 2R",
    description: "Combine luxury resort stay with 2 rounds of golf. Includes accommodation, breakfast, green fees, and club rental. Relax and play in style.",
    image: "https://www.pgaresort.com/images/content/homepageclubslidersmallimg/palm-harbor---innisbrook-resort---golf---2024-folklore-films-_12-1-.jpg"
  }
];