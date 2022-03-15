<!--   footer starts from here  -->
<footer class="footer">
    <!-- Copyright symbol of company -->
    <div class="content has-text-centered">
        <p>Copyright © Valerio Piselli</p>
    </div>
    
    <!-- Three columns created using columns class of Bulma -->
    <div class="columns">
        
        <!-- Column 1 -->
        <div class="column">
            <!-- Heading is left aligned, medium weight -->
            <h4 class="bd-footer-title has-text-weight-medium has-text-left">About Us</h4>
            
            <!-- footer content -->
            <p class="bd-footer-link has-text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, 
                tempore excepturi. Pariatur rem cum, nesciunt asperiores corrupti 
                temporibus repellendus fuga soluta perspiciatis. Commodi excepturi 
                perspiciatis earum reiciendis maiores corrupti enim.
            </p>
        </div>
        
        <!-- Column 2 -->
        <div class="column">
            <h4 class="bd-footer-title has-text-weight-medium has-text-justify">Explore</h4>
            
            <!-- Column 2 lists with links -->
            <p class="bd-footer-link">
                <a href="https://">
                    <span class="icon-text">
                        {{-- <span class="icon">
                            <i class="fas fa-home"></i>
                        </span> --}}
                        <span>Practice</span>
                    </span>
                </a>
                <br />
                <a href="https://">
                    <span class="icon-text">
                        <span>Blogs</span>
                    </span>
                </a>
                <br />
                <a href="https://">
                    <span class="icon-text">
                        <span>Careers</span>
                    </span>
                </a>
            </p>
        </div>
        
        <!-- Column 3 -->
        <div class="column">
            <h4 class="bd-footer-title has-text-weight-medium has-text-justify">Contact us</h4>
        
            <!-- Column 3 lists with links -->
            <p class="bd-footer-link">
                {{-- <a href="https://">
                    <span class="icon-text">
                        <span>Support</span>
                    </span>
                </a> --}}
                <support-button></support-button>
                <support-form></support-form>
            </p>
        </div>
    </div>
</footer>