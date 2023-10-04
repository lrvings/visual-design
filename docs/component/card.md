<v-row justify="space-between">
  <v-col :span="8">
    <v-gradient-card />
  </v-col>
  <v-col :span="8">
    <v-gradient-card styleType='a'>  </v-gradient-card>
  </v-col>
   <v-col :span="8">
    <v-gradient-card styleType='mask'>  </v-gradient-card>
  </v-col>
</v-row>

<v-row >
  <v-col :span="8">
    <v-gradient-card styleType='semicircle'/>
  </v-col>
  <v-col :span="8">
  <v-gradient-card styleType='clip-path'/>
  </v-col>
   <v-col :span="8">
  </v-col>
</v-row>

<style>

  .vi-row {
    margin-bottom: 20px;
  }
</style>
