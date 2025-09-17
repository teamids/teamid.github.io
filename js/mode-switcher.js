//Dark Mode

// ======== Step 1
// this checks whether system dark mode is set 
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
// this checks for session storage telling to override
// the system preferences 
let theme = sessionStorage.getItem('theme');

// ======== Step 2
if (systemInitiatedDark.matches) {
	document.getElementById("theme-toggle").className = "btn-light-mode";
} else {
	document.getElementById("theme-toggle").className = "btn-night-mode";
}

// ======== Step 3
function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	document.getElementById("theme-toggle").className = "btn-light-mode";
   	// this clears the session storage 
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").className = "btn-night-mode";
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);

// ======== Step 4
function modeSwitcher() {
  // it’s important to check for overrides again 
    let theme = sessionStorage.getItem('theme');
    // checks if reader selected dark mode 
    if (theme === "dark") {
      document.documentElement.setAttribute('data-theme', 'light');
      sessionStorage.setItem('theme', 'light');
      document.getElementById("theme-toggle").className = "btn-night-mode";
      // checks if reader selected light mode 
    }	else if (theme === "light") {
      document.documentElement.setAttribute('data-theme', 'dark');
      sessionStorage.setItem('theme', 'dark');
      document.getElementById("theme-toggle").className = "btn-light-mode";
      // checks if system set dark mode 
    } else if (systemInitiatedDark.matches) {	
      document.documentElement.setAttribute('data-theme', 'light');
      sessionStorage.setItem('theme', 'light');
      document.getElementById("theme-toggle").className = "btn-night-mode";
      // the only option left is system set light mode
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      sessionStorage.setItem('theme', 'dark');
      document.getElementById("theme-toggle").className = "btn-light-mode";
    }
  }
  
// ======== Step 5
  if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    sessionStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").className = "btn-light-mode";
  } else if (theme === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
    sessionStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").className = "btn-night-mode";
  }