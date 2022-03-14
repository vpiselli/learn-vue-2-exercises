<template>
    <div class="tw-flex" style="min-height: 500px">
        <!-- left -->
        <div class="tw-w-3/4 tw-bg-grey-lightest tw-p-8 tw-flex tw-flex-wrap tw-justify-center tw-items-center">
                <a :href="testimonial.link" 
                    :id="`testimonial-${ ++index }`" 
                    class="tw-p-4" 
                    target="_blank"
                    v-for="(testimonial, index) in testimonials"
                    @mouseover="updateFeatureTestimonial(testimonial)"
                >
                        <img :sr="`/images/reviews/${testimonial.avatar}`"
                            :alt="testimonial.name"
                            class="is-circle tw-w-12 tw-border-2 tw-border-solid hover:tw-border-blue-darker"
                            :class="featureTestimonial.id === testimonial.id ? 'tw-border-blue-darker' : 'tw-border-transparent'"
                        >
                </a>
        </div>

        <!-- right -->
        <div class="tw-w-2/5 tw-bg-grey-lighter tw-text-center tw-flex tw-items-center tw-p-10">
            <div>
                <img class="is-circle tw w 12"
                sr="`/images/reviews/${featureTestimonial.avatar}`"
                :alt="featureTestimonial.name">

                <p class="tw-text-black tw-font-bold tw-text-xs-tw-mb-6" v-text="featureTestimonial.name"></p>

                <p class="tw-text-grey-dark tw-mb-8" v-text="featureTestimonial.body"></p>
                
                <a href="" class="tw-bg-blue tw-rounded-full tw-text white tw-font-bold tw-text-xs tw-py-3 tw-px-8 tw-uppercase"> More Testimonials</a>
            </div>

        </div>

    </div>
</template>

<script>
import _ from 'lodash';

export default {
    data() {
        return {
            testimonials: [],
            featureTestimonial: [],
            timer: null
        }
    },

    created() {
        let testimonial_array = [
            {
                id: 1,
                body: "Laracast is insane!",
                feature: 0,
                name: "Taylor Otwell",
                company: "Laravel"
            },
            {
                id: 2,
                body: "Really good",
                feature: 0,
                name: "Jaffrey Way",
                company: "Laracast"
            },
            {
                id: 3,
                body: "My testimonial here",
                feature: 1,
                name: "Valerio Piselli",
                company: "WSS"
            },
        ];
        this.testimonials = testimonial_array;
        this.featureTestimonial = this.testimonials[0];
    },

    methods: {
        // updateFeatureTestimonial: _.throttle(function (testimonial) {
        updateFeatureTestimonial: _.debounce(function (testimonial) {
            this.featureTestimonial = testimonial;
        }, 200)
    }
}
</script>