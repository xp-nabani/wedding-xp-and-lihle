/* =========================================================
  XOLANI & THEMBELIHLE WEDDING WEBSITE
========================================================= */
  
  
  /* =========================================================
    MOBILE NAVIGATION
  ========================================================= */
    
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    
    if (navToggle && navLinks) {
      
      navToggle.addEventListener("click", () => {
        
        const isOpen =
          navLinks.classList.toggle("open");
        
        navToggle.setAttribute(
          "aria-expanded",
          isOpen
        );
        
      });
      
      
      // Close navigation after clicking a link
      
      const links =
        navLinks.querySelectorAll("a");
      
      links.forEach((link) => {
        
        link.addEventListener("click", () => {
          
          navLinks.classList.remove("open");
          
          navToggle.setAttribute(
            "aria-expanded",
            "false"
          );
          
        });
        
      });
      
    }
    
    
    /* =========================================================
      COUNTDOWN
    DAYS ONLY
    ========================================================= */
      
      const daysElement =
      document.getElementById("days");
    
    
    function updateCountdown() {
      
      if (!daysElement) {
        return;
      }
      
      
      /*
        Wedding date:
        05 November 2026
      
      Month is 10 because JavaScript
      counts months from 0.
      */
        
        const weddingDay =
        new Date(2026, 11, 5);
      
      const today =
        new Date();
      
      
      /*
        Remove the time component so that
      the countdown is based on calendar days.
      */
        
        today.setHours(
          0,
          0,
          0,
          0
        );
      
      
      const difference =
        weddingDay.getTime() -
        today.getTime();
      
      
      const millisecondsPerDay =
        1000 *
        60 *
        60 *
        24;
      
      
      let daysRemaining =
        Math.ceil(
          difference /
            millisecondsPerDay
        );
      
      
      /*
        If the wedding date has passed,
      show zero rather than a negative number.
      */
        
        if (daysRemaining < 0) {
          daysRemaining = 0;
        }
      
      
      daysElement.textContent =
        daysRemaining.toLocaleString();
      
    }
    
    
    // Run immediately
    updateCountdown();
    
    
    // Update once every hour
    setInterval(
      updateCountdown,
      60 * 60 * 1000
    );
    