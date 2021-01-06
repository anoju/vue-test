<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
    <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
    >
        I accept the terms and use
    </b-form-checkbox>
    <div>State: <strong>{{ status }}</strong></div>
</template>
<script>
export default {
    data() {
        return {
            status: 'not_accepted'
        }
    }
}
</script>
