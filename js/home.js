// Main Navigation Logic
// DOM elements
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.getElementById('nav-links');
const navButtons = document.querySelectorAll('#nav-links .nav-link');//mobile nav
const desktopNavButtons = document.querySelectorAll('nav .nav-link'); // Desktop nav
const sections = document.querySelectorAll('section');
const body = document.body;
const exploreButton = document.querySelector('#explore-button');
const logoButton = document.querySelector('#logo-button');

// Background classes for each section
const backgroundClasses = {
  home: 'bg-home-mobile md:bg-home-tablet lg:bg-home-desktop',
  crew: 'bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop',
  destination: 'bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop',
  technology: 'bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop',
};
// Function to hide the mobile nav
function hideMobileNav() {
  navLinks.style.right = '-100%';
}
// Function to set active state for both desktop and mobile nav
function setActiveLink(sectionId) {
  // Remove active state from all nav links
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('border-white');
    link.classList.add('border-transparent');
  });

  // Add active state to the clicked link
  const activeLink = document.querySelectorAll(`[data-section="${sectionId}"]`);
  activeLink.forEach(item =>{
    item.classList.add('border-white');
    item.classList.remove('border-transparent')
  }) 
}
// Function to switch sections with animation
function showSection(sectionId) {
  const currentSection = document.querySelector('.content-section:not(.hidden)');
  if (currentSection && currentSection.id === sectionId) {
    return; // Avoid unnecessary re-renders
  }
  // Fade out current section
  if (currentSection) {
    currentSection.classList.add('animate-fade-out');
    currentSection.addEventListener(
      'animationend',
      () => {
        currentSection.classList.add('hidden');
        currentSection.classList.remove('animate-fade-out');
      },
      { once: true }
    );
  }

  // Fade in new section
  const newSection = document.getElementById(sectionId);
  newSection.classList.remove('hidden');
  newSection.classList.add('animate-fade-in');
  newSection.addEventListener(
    'animationend',
    () => {
      newSection.classList.remove('animate-fade-in');
    },
    { once: true }
  );

  // Update background
  Object.values(backgroundClasses).forEach((bgClass) => {
    body.classList.remove(...bgClass.split(' '));
  });
  body.classList.add(...backgroundClasses[sectionId].split(' '));

  // Set active link
  setActiveLink(sectionId);
}
// Event listeners for mobile nav
menuIcon.addEventListener('click', (event) => {
  navLinks.style.right = '0';
  event.stopPropagation();
});
closeIcon.addEventListener('click', hideMobileNav);

document.addEventListener('click', (event) => {
  const isClickInsideNav = navLinks.contains(event.target) || menuIcon.contains(event.target);
  if (!isClickInsideNav) {
    hideMobileNav();
  }
});
// Mobile nav buttons: Close nav and navigate to section
navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const sectionId = button.getAttribute('data-section');
    hideMobileNav();
    showSection(sectionId);
    setActiveLink(sectionId);
  });
});
// Desktop nav buttons: Navigate to section
desktopNavButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const sectionId = button.getAttribute('data-section');
    showSection(sectionId);
    setActiveLink(sectionId);
  });
});
// Explore button logic
if (exploreButton) {
  exploreButton.addEventListener('click', () => {
    showSection('destination');
    setActiveLink('destination');
  });
}
// logo button logic
if (logoButton) {
  logoButton.addEventListener('click', () => {
    showSection('home');
    setActiveLink('home');
  });
}

// Initial setup on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.querySelector('#home');
  homeSection.classList.remove('hidden');
  body.classList.add(...backgroundClasses.home.split(' '));
  setActiveLink('home');
});

function hello(){}
hello = () => {}

// Destination Logic 
document.addEventListener('DOMContentLoaded', () => {
  // Select all navigation items and content sections
  const navItems = document.querySelectorAll('.nav-item');
  const contentSections = document.querySelectorAll('.destination-content');

  // Function to update active states
  const setActiveState = (targetId) => {
    // Hide all content sections
    contentSections.forEach(section => section.classList.add('hidden'));

    // Remove active state from all nav items
    navItems.forEach(nav => {
      nav.classList.remove('border-white');
      nav.classList.add('border-transparent');
    });

    // Show the target content section
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.classList.remove('hidden');

    // Add active state to nav items with matching data-target
    navItems.forEach(nav => {
      if (nav.dataset.target === targetId) {
        nav.classList.add('border-white');
        nav.classList.remove('border-transparent');
      }
    });
  };

  // Set initial state for Moon section
  setActiveState('moon');

  // Add click event listeners to nav items
  navItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      const targetId = item.dataset.target; // Get target ID from data attribute
      setActiveState(targetId); // Update the active state
    });
  });
});

// Crew Logic 
document.addEventListener('DOMContentLoaded', () => {
  const crewItems = document.querySelectorAll('.crew-nav-item');
  const crewSections = document.querySelectorAll('.crew-content');

  const setActivebutton = (crewTargetId) => {
    // Hide all content sections
    crewSections.forEach(section => section.classList.add('hidden'));
    
    // Remove active state from all nav items
    crewItems.forEach(nav => {
      nav.classList.remove('bg-white'); // Remove the active state
      nav.classList.add('bg-white/30'); // Add the inactive state
    });

    // Show the target content section
    const crewTargetSection = document.getElementById(crewTargetId);
    if (crewTargetSection) crewTargetSection.classList.remove('hidden');

    // Add active state to the matching nav item
    crewItems.forEach(nav => {
      if (nav.dataset.target === crewTargetId) {
        nav.classList.add('bg-white'); // Set the active state
        nav.classList.remove('bg-white/30'); // Remove the inactive state
      }
    });
  };

  // Set initial state for the Commander section
  setActivebutton('commander');

  // Add click event listeners to nav items
  crewItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      const crewTargetId = item.dataset.target; // Get target ID from data attribute
      setActivebutton(crewTargetId); // Update the active state
    });
  });
});

// Technology Logic 
document.addEventListener('DOMContentLoaded', () => {
  const Items = document.querySelectorAll('.technology-nav-item');
  const Sections = document.querySelectorAll('.technology-content');

  const setActivebutton = (TargetId) => {
    // Hide all content sections
    Sections.forEach(section => section.classList.add('hidden'));
    
    // Remove active state from all nav items
    Items.forEach(nav => {
      nav.classList.remove('bg-white','text-[#0B0D17]'); // Remove the active state
      nav.classList.add('text-white'); // Add the inactive state
    });

    // Show the target content section
    const TargetSection = document.getElementById(TargetId);
    if (TargetSection) TargetSection.classList.remove('hidden');

    // Add active state to the matching nav item
    Items.forEach(nav => {
      if (nav.dataset.target === TargetId) {
        nav.classList.add('bg-white','text-[#0B0D17]'); // Set the active state
        nav.classList.remove('text-white'); // Remove the inactive state
      }
    });
  };

  // Set initial state for the vehicle section
  setActivebutton('vehicle');

  // Add click event listeners to nav items
  Items.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      const TargetId = item.dataset.target; // Get target ID from data attribute
      setActivebutton(TargetId); // Update the active state
    });
  });
});











