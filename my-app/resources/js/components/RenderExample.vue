<script>
export default {
    data() {
        return { name: "Render example" };
    },

    render(element) {
        return element('div', { attrs: { id: 'foobar' }}, [
            element('h1', {class: "has-text-primary"}, this.name),
            element('p', "Some text here"),
        ]);
    }
    // Equivalent code:
    // render(createElement) {
    //     return createElement("p", { class: ["title", "has-text-primary"] }, "Render Example");
    // }
    // render(createElement) {
    //     return createElement("h1", "Render Example");
    // }
    // render(element) {
    //     return element("h1", "Render Example");
    // }
    // render(h) {
    //     return h("h1", "Render Example");
    // }
    // render(foo) {
    //     return foo("h1", "Render Example");
    // }
    //
    // render: h => h("h1", "Render Example")
}
</script>
