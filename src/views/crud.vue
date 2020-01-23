<template>
    <div class="row">
        <div class="col-12">
            <label>Filter Prefix: <input type="text" v-model="filter" /></label>
        </div>
        <div class="col-6">
            <ul class="list-unstyled">
                <li class="list-item">LName, FName</li>
            </ul>
        </div>
        <div class="col-6">
            <ul class="list-unstyled">
                <li class="list-item">
                    <label>
                        Name: <input type="text">
                    </label>
                </li>
                <li class="list-item">
                    <label>
                        Surname: <input type="text">
                    </label>
                </li>
            </ul>
        </div>
        <div class="col-12">
            <ul class="list-inline">
                <li class="list-item">
                    <button class="btn btn-primary-outline">Create</button>
                </li>
                <li class="list-item">
                    <button class="btn btn-primary-outline">Update</button>
                </li>
                <li class="list-item">
                    <button class="btn btn-primary-outline">Delete</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "crud",
        computed: {
            filter () {
                return this.$store.state.crud.filter;
            }
        }
    }
</script>

<style scoped lang="scss">
    .list-unstyled{
        .list-item{
            list-style: none;
            padding-bottom: .5rem;
        }
    }
    .list-inline{
        overflow: hidden;
        padding:0;
        margin:0;
        .list-item{
            float: left;
            list-style: none;
            padding-bottom: .5rem;
            padding-right: .5rem;
        }
    }
    .btn{
        width:100%;

    }
</style>