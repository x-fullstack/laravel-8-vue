<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <h1>hello world</h1>
                    <div class="card-body">
                        I'm an example component.
                    </div>

                    <el-row>
                        <el-button plain disabled>朴素按钮</el-button>
                        <el-button type="primary" plain disabled>主要按钮</el-button>
                        <el-button type="success" plain disabled>成功按钮</el-button>
                        <el-button type="info" plain disabled>信息按钮</el-button>
                        <el-button type="warning" plain disabled>警告按钮</el-button>
                        <el-button type="danger" plain disabled>危险按钮</el-button>
                    </el-row>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
