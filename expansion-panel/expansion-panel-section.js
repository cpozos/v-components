Vue.component('expansion-panel-section',{
    template:
    `
    <div>
        <input type="checkbox" :id="id" class="expansion-panel-section__input">
        <label :for="id" class="expansion-panel-section__label">
            {{label}}
            <ion-icon name="caret-down-outline"></ion-icon>
            <ion-icon name="caret-up-outline"></ion-icon>
        </label>
        <div class="expansion-panel-section__content">
            <slot></slot>
        </div>
    </div> 
    `,
    props:{
        label:{
            type: String,
            required: true
        }
    },
    data() {
        return {
            id : null
        }
    },

    mounted() {
        // Unique id for this component
        this.id = this._uid

        // scripts
        let ioniconsScript1 = document.createElement('script')
        let ioniconsScript2 = document.createElement('script')
        
        // Sources
        ioniconsScript2.setAttribute('src','https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js')
        ioniconsScript1.setAttribute('src','https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js')

        document.head.appendChild(ioniconsScript1)
        document.head.appendChild(ioniconsScript2)
    },
});

/**/