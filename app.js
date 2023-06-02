let directorsCards = document.querySelector(".directors__card__first");

let cardState = "open";

let elbtn=document.querySelector(".btn")
elbtn.addEventListener('click', (evt)=> {
  if (elbtn.classList.toggle('clicked')) {
    cardState = "closed";
    directorsCards.innerHTML=`
    <div class="directors__card__first">
                  <span class="aden__allan nikita">
                      Aden Allan
                  </span>
                  <p class="talent__sub-title long">
                      “Empowered teams create truly amazing products. Set the north star and let them follow it.”
                  </p>
                  <div class="social__settings">
                      <a href="@" class="linkedin__link">
                          <svg width="24" height="20" viewBox="0 0 24 20"  xmlns="http://www.w3.org/2000/svg">
                              <path d="M24 2.309C23.117 2.701 22.168 2.965 21.172 3.084C22.189 2.475 22.97 1.51 23.337 0.36C22.386 0.924 21.332 1.334 20.21 1.555C19.313 0.598 18.032 0 16.616 0C13.437 0 11.101 2.966 11.819 6.045C7.728 5.84 4.1 3.88 1.671 0.901C0.381 3.114 1.002 6.009 3.194 7.475C2.388 7.449 1.628 7.228 0.965 6.859C0.911 9.14 2.546 11.274 4.914 11.749C4.221 11.937 3.462 11.981 2.69 11.833C3.316 13.789 5.134 15.212 7.29 15.252C5.22 16.875 2.612 17.6 0 17.292C2.179 18.689 4.768 19.504 7.548 19.504C16.69 19.504 21.855 11.783 21.543 4.858C22.505 4.163 23.34 3.296 24 2.309Z" fill="white"/>
                              </svg>
                      </a>
                      <a href="@" class="twitter__link">
                          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H18C19.1 0 20 0.9 20 2V18C20 19.1 19.1 20 18 20H2C0.9 20 0 19.1 0 18V2C0 0.9 0.9 0 2 0ZM6 17V8H3V17H6ZM4.5 6.3C3.5 6.3 2.7 5.5 2.7 4.5C2.7 3.5 3.5 2.7 4.5 2.7C5.5 2.7 6.3 3.5 6.3 4.5C6.3 5.5 5.5 6.3 4.5 6.3ZM14 17H17V11.3C17 9.4 15.4 7.8 13.5 7.8C12.6 7.8 11.5 8.4 11 9.2V8H8V17H11V11.7C11 10.9 11.7 10.2 12.5 10.2C13.3 10.2 14 10.9 14 11.7V17Z" fill="white"/>
                              </svg>
                      </a>
                  </div>
                  <img src="../images/about__image/Group__13.png" alt="" class="directors__img__end">
              </div>
              </div>
    `
  } else if (elbtn.toggle("unclicked", (elbtn.className="unclicked"))) {
    directorsCards.innerHTML=`
    <div class="directors__card__first">
                    <span class="aden__allan nikita">
                        Aden Allan
                    </span>
                    <p class="talent__sub-title long">
                        “Empowered teams create truly amazing products. Set the north star and let them follow it.”
                    </p>
                    <div class="social__settings">
                        <a href="@" class="linkedin__link">
                            <svg width="24" height="20" viewBox="0 0 24 20"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 2.309C23.117 2.701 22.168 2.965 21.172 3.084C22.189 2.475 22.97 1.51 23.337 0.36C22.386 0.924 21.332 1.334 20.21 1.555C19.313 0.598 18.032 0 16.616 0C13.437 0 11.101 2.966 11.819 6.045C7.728 5.84 4.1 3.88 1.671 0.901C0.381 3.114 1.002 6.009 3.194 7.475C2.388 7.449 1.628 7.228 0.965 6.859C0.911 9.14 2.546 11.274 4.914 11.749C4.221 11.937 3.462 11.981 2.69 11.833C3.316 13.789 5.134 15.212 7.29 15.252C5.22 16.875 2.612 17.6 0 17.292C2.179 18.689 4.768 19.504 7.548 19.504C16.69 19.504 21.855 11.783 21.543 4.858C22.505 4.163 23.34 3.296 24 2.309Z" fill="white"/>
                                </svg>
                        </a>
                        <a href="@" class="twitter__link">
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H18C19.1 0 20 0.9 20 2V18C20 19.1 19.1 20 18 20H2C0.9 20 0 19.1 0 18V2C0 0.9 0.9 0 2 0ZM6 17V8H3V17H6ZM4.5 6.3C3.5 6.3 2.7 5.5 2.7 4.5C2.7 3.5 3.5 2.7 4.5 2.7C5.5 2.7 6.3 3.5 6.3 4.5C6.3 5.5 5.5 6.3 4.5 6.3ZM14 17H17V11.3C17 9.4 15.4 7.8 13.5 7.8C12.6 7.8 11.5 8.4 11 9.2V8H8V17H11V11.7C11 10.9 11.7 10.2 12.5 10.2C13.3 10.2 14 10.9 14 11.7V17Z" fill="white"/>
                                </svg>
                        </a>
                    </div>
                    <img src="../images/about__image/Group__13.png" alt="" class="directors__img__end">
                </div>
                </div>
    </div>
    `
    }
});