import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
location: string = 'Chennai';
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
updateLocation() {
  // For demo: Prompt user (replace with modal/dialog in real apps)
  const newLoc = prompt('Enter your new location:', this.location);
  if (newLoc) {
    this.location = newLoc;
  }
} navLinks = [
  { label: 'Products', icon: 'box' },
  { label: 'Coffee', icon: 'coffee' },
  { label: 'Burger', icon: 'burger' },
  { label: 'Sandwich', icon: 'sandwich' },
  { label: 'Broast', icon: 'broast' },
  { label: 'Offers', icon: 'tag' },
  { label: 'Blog', icon: 'blog' },
  { label: 'About Us', icon: 'info' },
  { label: 'Help', icon: 'help' }
];


  // categories = [
  //   {
  //     title: 'Technology',
  //     description: 'Latest gadgets and innovations',
  //     image: 'https://via.placeholder.com/150/3b82f6/ffffff?text=Tech',
  //   },
  //   {
  //     title: 'Travel',
  //     description: 'Destinations around the world',
  //     image: 'https://via.placeholder.com/150/f59e0b/ffffff?text=Travel',
  //   },
  //   {
  //     title: 'Food',
  //     description: 'Delicious recipes & cuisines',
  //     image: 'https://via.placeholder.com/150/10b981/ffffff?text=Food',
  //   },
  //   {
  //     title: 'Fitness',
  //     description: 'Workout and wellness tips',
  //     image: 'https://via.placeholder.com/150/ef4444/ffffff?text=Fit',
  //   },
  //   {
  //     title: 'Art',
  //     description: 'Creative artworks & designs',
  //     image: 'https://via.placeholder.com/150/8b5cf6/ffffff?text=Art',
  //   },
  // ];

  // scrollLeft() {
  //   this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  // }



  // ✅ Auto-sliding Carousel Logic
  ngAfterViewInit() {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    const showSlide = (i: number) => {
      items.forEach((item, idx) => {
        (item as HTMLElement).classList.toggle('hidden', idx !== i);
        dots[idx].classList.toggle('opacity-100', idx === i);
        dots[idx].classList.toggle('opacity-50', idx !== i);
      });
    };

    // Auto-slide every 4 seconds
    setInterval(() => {
      index = (index + 1) % items.length;
      showSlide(index);
    }, 4000);

    // Allow clicking dots to switch slides
    dots.forEach((dot, i) =>
      dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
      })
    );

    showSlide(index);
  }


  recentlyViewed = [
  {
    name: 'Cheese Burger',
    brand: 'HotNB Grill',
    category: 'Fast Food',
    price: 129,
    rating: 4.6,
    image: 'assets/cheeseburger.jpg',
    attributes: [
      { key: 'Size', value: 'Medium' },
      { key: 'Calories', value: '560 kcal' },
      { key: 'Ingredients', value: 'Cheese, Lettuce, Patty' },
    ],
  },
  {
    name: 'Cold Coffee',
    brand: 'Café Brew',
    category: 'Beverages',
    price: 99,
    rating: 4.8,
    image: 'assets/cold-coffie.jpg',
    attributes: [
      { key: 'Type', value: 'Iced Latte' },
      { key: 'Volume', value: '250 ml' },
      { key: 'Sugar', value: 'Medium' },
    ],
  },
  {
    name: 'Veg Sandwich',
    brand: 'Snack Hub',
    category: 'Snacks',
    price: 85,
    rating: 4.5,
    image: 'assets/veg_club_sandwich_01.png',
    attributes: [
      { key: 'Bread', value: 'Brown' },
      { key: 'Calories', value: '420 kcal' },
    ],
  },
  {
    name: 'Chicken Broast',
    brand: 'HotNB Grill',
    category: 'Non-Veg',
    price: 249,
    rating: 4.7,
    image: 'assets/broasted-chicken-7201660_1280.jpg',
    attributes: [
      { key: 'Pieces', value: '4 pcs' },
      { key: 'Spice Level', value: 'Medium' },
    ],
  },

  {
    name: 'Grilled Sandwich',
    brand: 'Cafe 99',
    category: 'Veg',
    price: 149,
    rating: 4.4,
    image: 'assets/Chicken-Grilled-sandwich-1.jpg',
    attributes: [
      { key: 'Bread', value: 'Whole Wheat' },
      { key: 'Filling', value: 'Cheese & Veggies' },
    ],
  },
  {
    name: 'Butter Chicken',
    brand: 'Punjabi Treats',
    category: 'Main Course',
    price: 299,
    rating: 4.8,
    image: 'assets/Best-Instant-Pot-Butter-Chicken-Recipe.jpg',
    attributes: [
      { key: 'Serving', value: '2 persons' },
      { key: 'Spice Level', value: 'Mild' },
    ],
  },
  {
    name: 'Chocolate Shake',
    brand: 'ShakeHub',
    category: 'Beverage',
    price: 129,
    rating: 4.9,
    image: 'assets/Chocolate-Shake-2-800x1219.jpg',
    attributes: [
      { key: 'Size', value: '500ml' },
      { key: 'Flavor', value: 'Rich Cocoa' },
    ],
  },
  {
    name: 'Tandoori Paneer Roll',
    brand: 'StreetBites',
    category: 'Veg',
    price: 139,
    rating: 4.6,
    image: 'assets/paneer-frankie.jpg',
    attributes: [
      { key: 'Roll Type', value: 'Wheat Wrap' },
      { key: 'Sauce', value: 'Mint Mayo' },
    ],
  },
  {
    name: 'Margherita Pizza',
    brand: 'Italiano Pizzeria',
    category: 'Veg',
    price: 329,
    rating: 4.5,
    image: 'assets/four-cheese-margherita-pizza-recipe-12-scaled-1202x1202.jpg',
    attributes: [
      { key: 'Size', value: '12 inch' },
      { key: 'Topping', value: 'Cheese & Basil' },
    ],
  },
  {
    name: 'Crispy French Fries',
    brand: 'HotnB Grill',
    category: 'Snack',
    price: 99,
    rating: 4.2,
    image: 'assets/Baked-French-Fries-Recipe-1200.jpg',
    attributes: [
      { key: 'Salt Level', value: 'Normal' },
      { key: 'Oil Type', value: 'Sunflower' },
    ],
  },
  {
    name: 'Strawberry Smoothie',
    brand: 'Juice Factory',
    category: 'Beverage',
    price: 159,
    rating: 4.8,
    image: 'assets/strawberries-and-cream-protein-shake-2.jpg',
    attributes: [
      { key: 'Size', value: '400ml' },
      { key: 'Sugar', value: 'Less' },
    ],
  },
 
];


trendingShops = [
  {
    name: 'HotNB Grill',
    category: 'Fast Food • Non-Veg',
    rating: 4.8,
    image: 'assets/hotgnd.jpg',
    attributes: [
      { key: 'Delivery Time', value: '25 mins' },
      { key: 'Distance', value: '2.3 km' },
      { key: 'Specialty', value: 'Broasted Chicken' },
    ],
  },
  {
    name: 'Cafe 99',
    category: 'Cafe • Bakery • Veg',
    rating: 4.6,
    image: 'assets/1920_bakerycafe5.jpg',
    attributes: [
      { key: 'Delivery Time', value: '20 mins' },
      { key: 'Distance', value: '1.2 km' },
      { key: 'Specialty', value: 'Sandwich & Coffee' },
    ],
  },
  {
    name: 'Punjabi Treats',
    category: 'Indian Cuisine • North Indian',
    rating: 4.7,
    image: 'assets/diwali-pastries.jpg',
    attributes: [
      { key: 'Delivery Time', value: '30 mins' },
      { key: 'Distance', value: '3.1 km' },
      { key: 'Specialty', value: 'Butter Chicken' },
    ],
  },
  {
    name: 'ShakeHub',
    category: 'Beverages • Milkshakes',
    rating: 4.9,
    image: 'assets/shop.jpg',
    attributes: [
      { key: 'Delivery Time', value: '15 mins' },
      { key: 'Distance', value: '0.9 km' },
      { key: 'Specialty', value: 'Thick Shakes' },
    ],
  },
  {
    name: 'StreetBites',
    category: 'Street Food • Wraps & Rolls',
    rating: 4.5,
    image: 'assets/maxresdefault.jpg',
    attributes: [
      { key: 'Delivery Time', value: '18 mins' },
      { key: 'Distance', value: '1.8 km' },
      { key: 'Specialty', value: 'Paneer Roll' },
    ],
  },
  {
    name: 'Asian Bites',
    category: 'Chinese • Asian Cuisine',
    rating: 4.4,
    image: 'assets/chinees.jpg',
    attributes: [
      { key: 'Delivery Time', value: '22 mins' },
      { key: 'Distance', value: '2.7 km' },
      { key: 'Specialty', value: 'Veg Hakka Noodles' },
    ],
  },
];





  storeSlides = [
    {
      store: 'HotNB Grill',
      offer: '🔥 Get 20% off on Chicken Combos!',
      comboProducts: ['Chicken Broast', 'Spicy Wings', 'Grill Burger'],
      image: 'assets/ngi6-hero.jpg',
    },
    {
      store: 'Fresh Mart',
      offer: '🍎 Buy 1 Get 1 Free on Fresh Fruits!',
      comboProducts: ['Apples', 'Bananas', 'Oranges'],
      image:
        'assets/pngtree-mix-fruit-banner-picture-image_4072752.jpg',
    },
    {
      store: 'Brew & Bean Café',
      offer: '☕ Flat 25% Off on Morning Coffee!',
      comboProducts: ['Cappuccino', 'Croissant', 'Espresso'],
      image:
        'assets/l-intro-1669583351.jpg',
    },
    {
      store: 'Tech Hub',
      offer: '💻 Save ₹1500 on Laptop Accessories!',
      comboProducts: ['Mouse', 'Keyboard', 'Headset'],
      image:
        'assets/photo-1519389950473-47ba0277781c.jpg',
    },
    {
      store: 'Glow Cosmetics',
      offer: '💄 30% Off on Skincare Combos!',
      comboProducts: ['Serum', 'Cleanser', 'Moisturizer'],
      image:
        'assets/photo-1588159343745-445ae0b16383.jpg',
    },
  ];

  currentIndex = 0;
  autoSlideInterval: any;
  isTransitioning = true;


  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  /** Starts auto-sliding the carousel */
  startAutoSlide() {
this.autoSlideInterval = setInterval(() => {
  if (this.currentIndex < this.storeSlides.length - 1) {
    this.currentIndex++;
  } else {
    // Disable animation just for this instant jump
    this.isTransitioning = false;
    this.currentIndex = 0;

    // Re-enable transition after the DOM updates
    setTimeout(() => {
      this.isTransitioning = true;
    }, 50);
  }
}, 3000);

  }

  /** Navigate manually to a specific slide */
  goToSlide(index: number) {
    this.currentIndex = index;
    this.restartAutoSlide();
  }

  /** Restarts auto-slide after manual interaction */
  restartAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }





  
SPcategories = [
  {
    name: 'Grills & BBQ',
    products: [
      { name: 'Chicken Grill', brand: 'HotNB Grill', price: 299, image: 'assets/grilled-chicken-breast-1-21.jpg' },
      { name: 'Fish BBQ', brand: 'HotNB Grill', price: 349, image: 'assets/fish-roasted-bbq_759505-9413.jpg' },
      { name: 'Paneer Tikka', brand: 'Veg Delight', price: 249, image: 'assets/photography-tasty-indian-paneer-tikka_1288657-46631.jpg' },
      { name: 'Kebab Platter', brand: 'HotNB Grill', price: 399, image: 'assets/Lamb-Shish-Kebab.jpg' }
    ]
  },
  {
    name: 'Burgers & Sandwiches',
    products: [
      { name: 'Cheese Burger', brand: 'HotNB Bites', price: 199, image: 'assets/originial-mcdonalds-cheeseburger-recipe.jpg' },
      { name: 'Veg Club', brand: 'HotNB Bites', price: 149, image: 'assets/club-sandwich-1-6-1536x1152.jpg' },
      { name: 'Chicken Sandwich', brand: 'HotNB Grill', price: 179, image: 'assets/CHICKEN-PARMESAN-SANDWICHES-1.jpg' },
      { name: 'Loaded Burger', brand: 'HotNB Bites', price: 249, image: 'assets/iStock-1248291191.jpg' }
    ]
  },
  {
    name: 'Mundhees Specials',
    products: [
      { name: 'Mutton Mundhee', brand: 'HotNB Grill', price: 499, image: 'assets/Mutton-Mundhee.jpg' },
      { name: 'Chicken Mundhee', brand: 'HotNB Grill', price: 449, image: 'assets/IMG_5690-2.jpg' },
      { name: 'Fish Mundhee', brand: 'HotNB Grill', price: 479, image: 'assets/Fish-Mandi-feature-image.webp' },
      { name: 'Mixed Mundhee', brand: 'HotNB Grill', price: 529, image: 'assets/Best-Mandi-Restaurants-In-Abu-Dhabi.jpg' }
    ]
  }
];

viewMore(category: any) {
  console.log('View more products for:', category.name);
  // Example: this.router.navigate(['/category', category.name]);
}





banners = [
    {
      title: 'Hot & Crispy Grills',
      subtitle:
        'Savor the smoky perfection of freshly grilled chicken and BBQ delights. Limited-time offers on combos!',
      image:
        'assets/bbq-grilled-food-top-view-banner-310427876.webp',
    },
    {
      title: 'Mundhees Specials',
      subtitle:
        'Dive into our traditional Mundhee flavors — a unique blend of taste and crunch you can’t resist.',
      image:
        'assets/p62r-hero.jpg',
    },
  ];







 collapsed = true;

  CMproducts = [
    {
      title: 'Classic Latte',
      description: 'Smooth blend with creamy foam',
      shop: 'Brew Haven Café',
      price: 180,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
    },
    {
      title: 'Dark Espresso',
      description: 'Bold flavor for mornings',
      shop: 'Caffeine Works',
      price: 150,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8'
    },
    {
      title: 'Cappuccino',
      description: 'Perfect milk and espresso balance',
      shop: 'Roast & Relax',
      price: 200,
      image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'
    },
    {
      title: 'Mocha',
      description: 'Chocolate twist with espresso',
      shop: 'Bean Bliss',
      price: 220,
      image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03'
    },
    {
      title: 'Caramel Latte',
      description: 'Sweet caramel with smooth latte',
      shop: 'The Daily Grind',
      price: 190,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
    },
    {
      title: 'Iced Coffee',
      description: 'Chilled delight with bold taste',
      shop: 'Cool Beans Café',
      price: 160,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
    },
    {
      title: 'Flat White',
      description: 'Silky texture with microfoam',
      shop: 'Aroma Avenue',
      price: 210,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8'
    },
    {
      title: 'Americano',
      description: 'Simple, strong, and smooth',
      shop: 'Urban Roast',
      price: 170,
      image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'
    },
    {
      title: 'Vanilla Latte',
      description: 'Light, creamy vanilla taste',
      shop: 'Café Bliss',
      price: 200,
      image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03'
    },
    {
      title: 'Hazelnut Mocha',
      description: 'Nutty flavor meets chocolate',
      shop: 'Grounded Café',
      price: 230,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8'
    }
  ];

  toggleSeeMore() {
    this.collapsed = !this.collapsed;
  }

products = [
  { name: 'Cappuccino Combo', brand: 'Brew & Bean Café', price: 299, image: 'assets/images/cappuccino.jpg' },
  { name: 'Espresso Duo', brand: 'Coffee Corner', price: 249, image: 'assets/images/espresso.jpg' },
  { name: 'Mocha Delight', brand: 'HotNB Grill', price: 279, image: 'assets/images/mocha.jpg' },
  { name: 'Caramel Latte', brand: 'Café Aroma', price: 319, image: 'assets/images/caramel-latte.jpg' },
  { name: 'Vanilla Brew', brand: 'Bean & Cream', price: 269, image: 'assets/images/vanilla-brew.jpg' },
  { name: 'Hazelnut Frappe', brand: 'Coffee Cloud', price: 349, image: 'assets/images/frappe.jpg' },
  { name: 'Cold Brew Chill', brand: 'Urban Beans', price: 229, image: 'assets/images/cold-brew.jpg' },
  { name: 'Classic Americano', brand: 'HotNB Grill', price: 199, image: 'assets/images/americano.jpg' },
  { name: 'Macchiato Combo', brand: 'Brew Café', price: 259, image: 'assets/images/macchiato.jpg' },
];

loadMore() {
  console.log('Loading more products...');
  // In future: fetch or show additional products dynamically
}



  currentYear: number = new Date().getFullYear();



 showAllCombos = false;

comboProducts = [
  {
    name: 'Cappuccino Delight',
    brand: 'Bean Bliss',
    price: 180,
    rating: 4.7,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0',
    attributes: [
      { key: 'Size', value: 'Medium' },
      { key: 'Type', value: 'Hot' },
    ],
  },
  {
    name: 'Mocha Magic',
    brand: 'Urban Brew',
    price: 210,
    rating: 4.8,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772',
    attributes: [
      { key: 'Size', value: 'Large' },
      { key: 'Type', value: 'Iced' },
    ],
  },
  {
    name: 'Espresso Shot',
    brand: 'Roast Republic',
    price: 150,
    rating: 4.6,
    category: 'Espresso',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8',
    attributes: [
      { key: 'Strength', value: 'Extra' },
      { key: 'Blend', value: 'Dark Roast' },
    ],
  },
  {
    name: 'Vanilla Latte',
    brand: 'Morning Cup',
    price: 190,
    rating: 4.5,
    category: 'Latte',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    attributes: [
      { key: 'Flavor', value: 'Vanilla' },
      { key: 'Milk', value: 'Oat' },
    ],
  },
  {
    name: 'Caramel Frappe',
    brand: 'Cafe Cloud',
    price: 250,
    rating: 4.9,
    category: 'Frappe',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    attributes: [
      { key: 'Sweetness', value: 'Medium' },
      { key: 'Ice', value: 'Crushed' },
    ],
  },
  {
    name: 'Cold Brew',
    brand: 'Brew Lab',
    price: 200,
    rating: 4.4,
    category: 'Cold Coffee',
    image: 'https://images.unsplash.com/photo-1561047029-3000e62f5bb2',
    attributes: [
      { key: 'Type', value: 'Iced' },
      { key: 'Roast', value: 'Medium' },
    ],
  },
  {
    name: 'Hazelnut Latte',
    brand: 'The Coffee House',
    price: 220,
    rating: 4.8,
    category: 'Latte',
    image: 'https://images.unsplash.com/photo-1534777410127-7ca5b84f6c9a',
    attributes: [
      { key: 'Flavor', value: 'Hazelnut' },
      { key: 'Milk', value: 'Almond' },
    ],
  },
  {
    name: 'Iced Americano',
    brand: 'Daily Grind',
    price: 170,
    rating: 4.3,
    category: 'Americano',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    attributes: [
      { key: 'Strength', value: 'Bold' },
      { key: 'Ice', value: 'Full' },
    ],
  },
  {
    name: 'Coconut Cold Brew',
    brand: 'Island Roast',
    price: 230,
    rating: 4.9,
    category: 'Cold Coffee',
    image: 'https://images.unsplash.com/photo-1527169402691-aef4e1df8c59',
    attributes: [
      { key: 'Flavor', value: 'Coconut' },
      { key: 'Type', value: 'Iced' },
    ],
  },
  {
    name: 'Pumpkin Spice Latte',
    brand: 'Autumn Beans',
    price: 240,
    rating: 4.8,
    category: 'Latte',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348',
    attributes: [
      { key: 'Flavor', value: 'Pumpkin Spice' },
      { key: 'Milk', value: 'Soy' },
    ],
  },
];


  get visibleCombos() {
    return this.showAllCombos ? this.comboProducts : this.comboProducts.slice(0, 10);
  }

  toggleSeeMoreCombos() {
    this.showAllCombos = !this.showAllCombos;
  }

}
